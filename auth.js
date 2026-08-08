document.addEventListener("DOMContentLoaded", () => {

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();

      const user = document.getElementById("loginUser").value;

      alert("🐢 Welcome back, " + user + "!");
      window.location.href = "/editor.html";
    });
  }

  // SIGNUP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", e => {
      e.preventDefault();

      const user = document.getElementById("newUser").value;

      if (!document.getElementById("agreeTOS").checked ||
          !document.getElementById("consent").checked) {
        alert("Please agree to the TOS and consent.");
        return;
      }

      alert("🐢 Account created for " + user + "!");
      window.location.href = "login.html";
    });
  }

});
