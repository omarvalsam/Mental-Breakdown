async function projectModalHandler(event) {
  event.preventDefault();

  const title = document.getElementById("project-title").value;

  const task_text = document
    .querySelector('textarea[name="project-description"]')
    .value.trim();
  // const collaborators = document.getElementById('project-collaborators').value;

  if (
    (title, task_text)
    // collaborators
  ) {
    console.log(title, task_text);
    const response = await fetch("/api/tasks", {
      method: "post",
      body: JSON.stringify({
        title,
        task_text,
        // collaborators
      }),
    });

    if (response.ok) {
      // document.location.reload();
      console.log("im working");
    } else {
      alert(response.statusText);
    }
  }
}

// const createProject = document.getElementById("createProject");

document
  .querySelector("project-form")
  .addEventListener("submit", projectModalHandler);
