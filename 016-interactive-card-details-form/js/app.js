const form = document.getElementById("formulario");
const cardHolder = document.getElementById("cardHolder");
const cardNumber = document.getElementById("cardNumber");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const cvc = document.getElementById("cvcDate");
const main = document.querySelector("main");
const complete = document.querySelector(".complete");

const card_Number = document.querySelector(".card_number");
const cardName = document.querySelector(".card_name");
const monthSpan = document.querySelector(".monthSpan");
const yearSpan = document.querySelector(".yearSpan");
const cvcSpan = document.querySelector(".cvc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  complete.style.display = "flex";
  main.style.display = "none";
});

const inputCardHolder = () => {
  cardHolder.addEventListener("input", () => {
    cardName.textContent = cardHolder.value;
  });
  cardNumber.addEventListener("input", () => {
    let cardNumberInput = cardNumber.value;
    let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
    // Split the card number is groups of 4
    let cardNumberSpace = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSpace !== null) {
      formattedCardNumber = cardNumberSpace.join(" ");
      // If the formmattedCardNumber is different to what is shown, change the value
      if (cardNumberInput !== formattedCardNumber) {
        cardNumber.value = formattedCardNumber;
      }
      card_Number.textContent = cardNumber.value;
      if (cardNumber.value === "") {
        card_Number.textContent = "0000 0000 0000 0000";
      }
    }
  });
  let expMonth = /^(0[0-9]|1[1-2]){2}$/;
  let expYear = /^[0-9][0-2]{4}$/;
  let expCVC = /^[0-9]{3,4}$/;

  if (!expMonth.test(expMonth)) {
    mm.addEventListener("input", () => {
      if (mm.value <= 12) {
        monthSpan.textContent = mm.value;
      } else {
        mm.value = 12;
      }
    });
  }
  if (!expYear.test(expYear)) {
    yy.addEventListener("input", () => {
      if (yy.value <= 99) {
        yearSpan.textContent = yy.value;
      } else {
        yy.value = 99;
      }
    });
  }
  if (!expCVC.test(expCVC)) {
    cvc.addEventListener("input", () => {
      if (cvc.value <= 9999) {
        cvcSpan.textContent = cvc.value;
      } else {
        cvc.value = 9999;
      }
    });
  }
};
