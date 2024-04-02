document.addEventListener("DOMContentLoaded", function () {
  const notification = document.getElementById("noti");

  function clearNotification() {
    notification.remove();
  }

  notification.addEventListener("click", clearNotification);

  function displayNotification() {
    notification.textContent = "DID YOU KNOW MUHAB IS THE GREATEST TO DO IT";
    notification.style.border = "2px solid red";
    notification.style.padding = "10px";
    notification.style.color = "red";
  }

  displayNotification();
});
