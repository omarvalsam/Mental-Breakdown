//middleware start
const router = require("express").Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../../db/schema.sql')

router.use(require('serve-static')(__dirname + '/../../public'));
router.use(require('cookie-parser')());
router.use(require('body-parser').urlencoded({ extended: true }));
router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());

const { User } = require("../../models");
//middleware end

passport.serializeUser((user, password, done) => {
  done(null, user.username);
  done(null, password.password);
});

passport.deserializeUser((username, password, done) => {
 try{
  const result = await db.promise().query(`SELECT * FROM mental_breakdown WHERE USERNAME = '${username}' and PASSWORD = '${password}'`);
  if (result[0][0]) {
    done(null, result[0][0]);
  }
 } catch (err){
   done(err, null);
 }
});


//strategy start
passport.use(new LocalStrategy(
  async (username, password, done) => { 
    try {
          const result = await db.promise().query(`SELECT * FROM mental_breakdown WHERE USERNAME = '${username}' and PASSWORD = '${password}'`);
        if (result[0].length === 0){
          done(null, false);
        } else {
          if (result[0][0].password === password) {
            done(null, result[0][0]);
          } else {
            done(null, false);
          }
          if (result[0][0].username === username){
            done(null, result[0][0]); 
          } else {
            done(null, false);
          }
        } 
    } catch (err) { 
      done(err, false);
    }
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   if (!user.verifyPassword(password)) { return done(null, false); }
    //   return done(null, user);
    // });
  }
));
//strategy end

//sessions start
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
// sessions end

//authenticate request start
router.post('/User', 
  passport.authenticate('local', { failureRedirect: '/user' }),
  (req, res) => {
    res.send(200);
    res.redirect('/');
  });
//authenticate request end

module.exports = passport


  //found at https://openbase.com/js/passport