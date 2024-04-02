function validateForm() {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function validate(event) {
    event.preventDefault();
    const message = document.getElementById("message-panel");
    const emailField = document.getElementById("email").value;
    const nameField = document.getElementById("fname").value;
    const cNameField = document.getElementById("cName").value;
    const phoneField = document.getElementById("phone").value;
    const jDiscField = document.getElementById("job-description").value;

    const email = emailField.value.trim();
    const name = nameField.value;
    const cName = cNameField.value;
    const phone = phoneField.value;
    const jDisc = jDiscField.value;

    if (!email || !cName || !phone || !jDisc || !name) {
      message.style.backgroundColor = "red";
      message.style.color = "white";
      message.innerHTML = "Please fill in all boxes";
    } else if (phone.length < 10) {
      message.style.backgroundColor = "red";
      message.style.color = "white";
      message.innerHTML = "Phone number must be 10 numbers long";
    } else if (!email.endsWith(".com") && !email.endsWith(".ca")) {
      message.style.backgroundColor = "red";
      message.style.color = "white";
      message.innerHTML = "Please enter valid email";
    } else {
      message.style.backgroundColor = "green";
      message.style.color = "white";
      message.innerHTML = "Thank you for the opportunity!";
    }

    emailField.value = "";
    nameField.value = "";
    cNameField.value = "";
    phoneField.value = "";
    jDiscField.value = "";
  });
}
validateForm();
