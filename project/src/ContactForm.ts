interface ContactForm {
    name: string;
    email: string;
    message: string;
  }
  
  const form = document.getElementById("contactForm") as HTMLFormElement;
  const formMessage = document.getElementById("formMessage") as HTMLElement;
  
  function validateContactForm(data: ContactForm): string {
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
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData: ContactForm = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      message: (document.getElementById("message") as HTMLTextAreaElement).value,
    };
  
    const validationMessage = validateContactForm(formData);
    if (validationMessage === "OK") {
      formMessage.textContent = "Modulo inviato con successo!";
      formMessage.style.color = "green";
      form.reset();
    } else {
      formMessage.textContent = validationMessage;
      formMessage.style.color = "red";
    }
  });
  
