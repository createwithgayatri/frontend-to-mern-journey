const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.innerText =
    "Thank you! Your message has been sent successfully.";

  contactForm.reset();
});