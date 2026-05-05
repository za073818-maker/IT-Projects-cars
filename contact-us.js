const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (contact) {
  contact.preventDefault();

  //saving in variables
  const formData = {
    name: document.getElementById("nam").value,
    id: document.getElementById("idd").value,
    email: document.getElementById("cre").value,
    problem: document.getElementById("pro").value,
  };

  // final saving here
  localStorage.setItem("contactSubmission", JSON.stringify(formData));
  alert("Data saved!");
});

// confirming delting
contactForm.addEventListener("reset", function () {
  if (confirm("Clear saved data too?")) {
    localStorage.removeItem("contactSubmission");
  }
});
