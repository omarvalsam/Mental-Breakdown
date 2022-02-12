//So conceptually, Once the task is pulled to to the backend, it is stored via the route, 
//then pulled back out and put into the notifications section.?

//Xfunction is caused by button on front end, This function calls the put method,
//.then() function is called to do a pull request which is sent to users? (this part im not sure on how to allow notifications.
//If it would be best to call the function and within that function to do a for loop that goes through all the variables; 
//aka the users and then retieves the users id and then we use that id to attach the pull request message or another message( I.E. you have mail!)

// then send this to the users with another function?

//should it be a function that runs when the submit/save button is pressed? no backend needed?

const router = require("express").Router();
const { Notification, Task } = require('../../models/notification');


// Notification function start
typeof Notification !== "undefined"

Notification.requestPermission().then(function (permission) {
  console.log(permission);
});

var title = "{Task - 'title'} was changed {Task - created_at}";
var body = {Task = "Task_text"};
var notification = new Notification(title, {body});

let showNotification = document.visibilityState !== "visible";
if(showNotification) {
  //notification code
}

var notification = new Notification('Travel');
notification.close();
notification.onclick = function(){
  window.parent.focus();
  notification.close();
}

let permission = Notification.permission;
if(permission === "granted"){
  showNotification();
}else if(permission === "default"){
  requestAndShowPermission();
}else { alert("use normal alert");}

function showNotification(){
  if(document.visibilityState === "visible"){
    return;
  }
  var title = "{Task - 'title'} was changed {Task - created_at}"; //text that brings in the text for "title" and "created_at" from Task model
  var notification = new notification(title); //notification will show title variable?
  notification.onclick = () => {
    notification.close();window.parent.focus();
  }
}

function requestAndShowPermission() {
  Notification.requestPermission(function (permission){
    if (permission === "granted"){
      showNotification();
    }
  });
}
//Notification function end


//get updated notification
router.get('/', (req, res) => {
  console.log('route check!')
  Task.findAll({
    attributes: ["created_at"]
  })
  .then()
}); 