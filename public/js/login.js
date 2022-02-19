async function signUpFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      document.location.replace("/userinterface");
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpFormHandler);

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/userinterface");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

const element = document.querySelector("#sign-in");

element.addEventListener("click", () => {
  element.classList.add("animate__animated", "animate__swing");
});

const element2 = document.querySelector("#sign-up");

element2.addEventListener("click", () => {
  console.log("element2");

  element2.classList.add("animate__animated", "animate__rotateIn");
});
