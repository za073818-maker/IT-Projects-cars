document
  .getElementById("signup-form")
  .addEventListener("submit", function (user) {
    user.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // deosnt match pop up alert
    if (password != confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    //saving in variables
    const userData = {
      name: fullName,
      email: email,
      password: password,
    };

    // final saving here
    localStorage.setItem("userAccount", JSON.stringify(userData));
    alert("Account created successfully!");
  });

const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");
// autofilling the confirm password input
passInput.addEventListener("input", () => {
  confirmInput.value = passInput.value;
});
