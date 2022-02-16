//middleware start
const router = require("express").Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');

router.use(require('serve-static')(__dirname + '/../../public'));
router.use(require('cookie-parser')());
router.use(require('body-parser').urlencoded({ extended: true }));
router.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());

const { Task, User } = require("../../models");
//middleware end

//strategy start
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
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
  function(req, res) {
    res.redirect('/');
  });
//authenticate request end

module.exports = passport


  //found at https://openbase.com/js/passport