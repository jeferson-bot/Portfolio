var form = document.getElementById("contactForm");
var formMessage = document.getElementById("formMessage");
function validateContactForm(data) {
  if (data.name.trim().length < 3) {
    return "Il nome deve avere almeno 3 caratteri.";
  }
  if (!data.email.indexOf("@")) {
    return "Email non valida.";
  }
  if (data.message.trim().length < 10) {
    return "Il messaggio deve avere almeno 10 caratteri.";
  }
  return "OK";
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  var validationMessage = validateContactForm(formData);
  if (validationMessage === "OK") {
    formMessage.textContent = "Modulo inviato con successo!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = validationMessage;
    formMessage.style.color = "red";
  }
});
