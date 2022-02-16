async function projectModalHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="project-title"]').value.trim();

  const description = document.querySelector('textarea[name="project-description"]').value.trim();

  const collaborators = document.querySelector('input[name="project-collaborators"]').value.trim();

  if (title, description, collaborators) {
    const response = await fetch('/api/project', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description, 
        collaborators
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
}


document.getElementById('createProject').addEventListener('click', projectModalHandler);




// router.post('/', (req, res) => {
//   // check the session
//   if (req.session) {
//     Project.create({
//       title: req.body.title,
//       post_id: req.body.post_id,
//       // use the id from the session
//       user_id: req.session.user_id
//     })
//       .then(dbCommentData => res.json(dbCommentData))
//       .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });