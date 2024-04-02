function validateForm() {
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function validate(event) {
    event.preventDefault();
    const message = document.getElementById("message-panel");
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("fname").value;
    const cName = document.getElementById("cName").value;
    const phone = document.getElementById("phone").value;
    const jDisc = document.getElementById("job-description").value;

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

      document.getElementById("email").value = "";
      document.getElementById("fname").value = "";
      document.getElementById("cName").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("job-description").value = "";
    }
  });
}
validateForm();
