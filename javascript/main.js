const sendButton = document.getElementById("send-button");
const headingElement = document.getElementById("heading-text");
const inputElement = document.getElementById("name-specifications");
const paragraphElement = document.getElementById("contact-desctiption");

sendButton.addEventListener("click", function (event) {
  let enteredName = inputElement.value;
  headingElement.innerText = "Thank you " + enteredName + "!";
  paragraphElement.innerText =
    "Your Message has been recieved and I'll get back to you as soon as possible!";

  if (enteredName !== "") {
    headingElement.innerText = "Thank you " + enteredName + "!";
    paragraphElement.innerText =
      "Your Message has been recieved and I'll get back to you as soon as possible!";
  } else {
    headingElement.innerText = "Wanna Contact Me?";
    paragraphElement.innerText =
      "Amazing! If you would like to get in contact with me, please write in your name, contact information and why you are getting in touch with me, and I will get back to you as soon as possible.";
  }
});
