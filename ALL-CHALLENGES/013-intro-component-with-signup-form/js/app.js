const regName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regPass = /(?=.*[0-9])/;
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const formulario = document.getElementById("formulario");
const userFirst = document.getElementById("userFirst");
const userLast = document.getElementById("userLast");
const userEmail = document.getElementById("userEmail");
const password = document.getElementById("password");
const errorI = document.querySelector(".invalidI");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (regName.test(userFirst.value.trim())) {
    console.log(userFirst.value);
  } else if (userFirst.value === "" || userFirst.value >= 3) {
    errorShow1();
  }
  if (regName.test(userLast.value.trim())) {
    console.log(userLast.value);
  } else if (userLast.value === "" || userLast.value >= 3) {
    errorShow2();
  }
  if (regEmail.test(userEmail.value.trim())) {
    console.log(userEmail.value);
  } else {
    errorShow3();
  }
  if (regPass.test(password.value.trim())) {
    console.log(password.value);
  } else {
    errorShow4();
  }
});
const valArr = [];

const errorShow1 = () => {
  error1.textContent = "First Name cannot be empty!";
  userFirst.classList.add("invalidI");

  setTimeout(fadeOut1, 1500);
};
const errorShow2 = () => {
  error2.textContent = "Last Name cannot be empty!";
  userLast.classList.add("invalidI");
  setTimeout(fadeOut2, 1500);
};
const errorShow3 = () => {
  error3.textContent = "Enter a valid email!";
  userEmail.classList.add("invalidI");
  setTimeout(fadeOut3, 1500);
};
const errorShow4 = () => {
  error4.textContent = "Password cannot be empty!";
  password.classList.add("invalidI");

  setTimeout(fadeOut4, 1500);
};

const fadeOut1 = () => {
  error1.textContent = "";
  userFirst.classList.remove("invalidI");
};
const fadeOut2 = () => {
  error2.textContent = "";
  userLast.classList.remove("invalidI");
};
const fadeOut3 = () => {
  error3.textContent = "";
  userEmail.classList.remove("invalidI");
};
const fadeOut4 = () => {
  error4.textContent = "";
  password.classList.remove("invalidI");
};
