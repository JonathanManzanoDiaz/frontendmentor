var please = document.querySelector(".please");
var noti = document.querySelector(".noti");
var email = document.getElementById("email");
var pattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var emailV = email.value;
noti.addEventListener("click", () => {
  if (email.value.match(pattern)) {
    please.textContent = "Subscribed with exit!!";
    please.classList.remove("hide");
  } else {
    please.innerHTML = "Please provide a valid email address";
  }
});
