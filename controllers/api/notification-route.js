//So conceptually, Once the task is pulled to to the backend, it is stored via the route, 
//then pulled back out and put into the notifications section.?

//Xfunction is caused by button on front end, This function calls the put method,
//.then() function is called to do a pull request which is sent to users? (this part im not sure on how to allow notifications.
//If it would be best to call the function and within that function to do a for loop that goes through all the variables; 
//aka the users and then retieves the users id and then we use that id to attach the pull request message or another message( I.E. you have mail!)

// then send this to the users with another function?

//should it be a function that runs when the submit/save button is pressed? no backend needed?

const router = require("express").Router();
const { Notification, Task } = require('../../models');

let notificationBrowser() = 

//function that runs when submit/save button is clicked
// app.listen(button pressed)


//get updated notification
router.get('/', (req, res) => {
  console.log('route check!')
  Task.findAll({
    attributes: ["createdAt"]
  })
  .then(notificationBrowser)
}); 