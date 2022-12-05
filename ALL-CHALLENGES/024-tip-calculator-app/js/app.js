const billAmt = document.querySelector(".billAmount");
const numPeople = document.querySelector(".numPeople");
const reset = document.querySelector(".reset");
const btnTip = document.querySelectorAll(".btnTip");
const custom = document.querySelector(".custom");
const spanTip = document.querySelector(".spanTip");
const personTip = document.querySelector(".personTip");

function billValor(num) {
  let each = (billAmt.value * num) / numPeople.value;
  let total = billAmt.value * num;
  spanTip.textContent = (each / 100).toFixed(2);
  personTip.textContent = (total / 100).toFixed(2);
}

custom.addEventListener("input", () => console.log(billValor(custom.value)));

btnTip.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent == "5%") {
      billValor(5);
    }
    if (item.textContent == "10%") {
      billValor(10);
    }
    if (item.textContent == "15%") {
      billValor(15);
    }
    if (item.textContent == "25%") {
      billValor(25);
    }
    if (item.textContent == "50%") {
      billValor(50);
    }
  });
});

reset.addEventListener("click", () => {
  spanTip.textContent = "0.00";
  personTip.textContent = "0.00";
});
