const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector(".spanAdvice").textContent = data.slip.id;
  document.querySelector(".advicePar").textContent = data.slip.advice;
};

const dice = document.querySelector(".dice");

dice.addEventListener("click", fetchAdvice);
