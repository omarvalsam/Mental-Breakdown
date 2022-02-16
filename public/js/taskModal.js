async function taskModalHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="task-title"]').value.trim();

  const description = document.querySelector('textarea[name="task-description"]').value.trim();

  const statusToDo = document.getElementById("statusToDo").append.getElementById('to-do');
  // const statusInProgress = document.getElementById("statusInProgress").append.getElementById('in-progress');
  // const statusDone = document.getElementById("statusDone").append.getElementById('done');
  // const statusSOS = document.getElementById("statusSOS").append.getElementById('sos');



  if (title, description, statusToDo) {
    const response = await fetch('/api/task:id', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description, 
        statusToDo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};



document.getElementById('createTask').addEventListener('click', taskModalHandler);