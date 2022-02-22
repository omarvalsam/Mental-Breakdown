async function taskModalHandler(event) {
  event.preventDefault();

  const title = document.getElementById('task-title').value;

  const task_text = document.getElementById('task-description').value;

  const status = document.getElementById("statusToDo");
  status.setAttribute('id', 'to-do');
  



  if (title, task_text, status) {
    console.log(title, task_text, status);
    const response = await fetch('/api/task:id', {
      method: 'POST',
      body: JSON.stringify({
        title,
        task_text, 
        status
      })
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};



const createTask = document.getElementById('createTask');

createTask.addEventListener('submit', taskModalHandler);