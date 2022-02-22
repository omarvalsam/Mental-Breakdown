async function projectModalHandler(event) {
  event.preventDefault();

  const title = document.getElementById("project-title").value;

  const description = document
    .querySelector('textarea[name="project-description"]')
    .value.trim();
  // const collaborators = document.getElementById('project-collaborators').value;

  if (
    (title, description)
    // collaborators
  ) {
    // console.log(title, description, collaborators);
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        // collaborators
      }),
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

const createProject = document.getElementById("createProject");

createProject.addEventListener("submit", projectModalHandler);
