const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const liH1 = document.querySelector(".liH1");
const liH2 = document.querySelector(".liH2");
const liH3 = document.querySelector(".liH3");
const liH4 = document.querySelector(".liH4");
const liH5 = document.querySelector(".liH5");
const liH6 = document.querySelector(".liH6");
const pH1 = document.querySelector(".pH1");
const pH2 = document.querySelector(".pH2");
const pH3 = document.querySelector(".pH3");
const pH4 = document.querySelector(".pH4");
const pH5 = document.querySelector(".pH5");
const pH6 = document.querySelector(".pH6");
const getData = async () => {
  const requestURL = "../data.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const data = await response.json();

  daily.addEventListener("click", () => {
    for (let i = 0; i < data.length; i++) {
      switch (data[i].title) {
        case "Work":
          liH1.textContent = `${data[0].timeframes.daily.current}hrs`;
          pH1.textContent = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
          break;
        case "Play":
          liH2.textContent = `${data[1].timeframes.daily.current}hrs`;
          pH2.textContent = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
          break;
        case "Study":
          liH3.textContent = `${data[2].timeframes.daily.current}hrs`;
          pH3.textContent = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
          break;
        case "Exercise":
          liH4.textContent = `${data[3].timeframes.daily.current}hrs`;
          pH4.textContent = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
          break;
        case "Social":
          liH5.textContent = `${data[4].timeframes.daily.current}hrs`;
          pH5.textContent = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
          break;
        case "Self Care":
          liH6.textContent = `${data[5].timeframes.daily.current}hrs`;
          pH6.textContent = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
          break;
      }
    }
  });
  weekly.addEventListener("click", () => {
    for (let i = 0; i < data.length; i++) {
      switch (data[i].title) {
        case "Work":
          liH1.textContent = `${data[0].timeframes.weekly.current}hrs`;
          pH1.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
          break;
        case "Play":
          liH2.textContent = `${data[1].timeframes.weekly.current}hrs`;
          pH2.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
          break;
        case "Study":
          liH3.textContent = `${data[2].timeframes.weekly.current}hrs`;
          pH3.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
          break;
        case "Exercise":
          liH4.textContent = `${data[3].timeframes.weekly.current}hrs`;
          pH4.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
          break;
        case "Social":
          liH5.textContent = `${data[4].timeframes.weekly.current}hrs`;
          pH5.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
          break;
        case "Self Care":
          liH6.textContent = `${data[5].timeframes.weekly.current}hrs`;
          pH6.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
          break;
      }
    }
  });
  monthly.addEventListener("click", () => {
    for (let i = 0; i < data.length; i++) {
      switch (data[i].title) {
        case "Work":
          liH1.textContent = `${data[0].timeframes.monthly.current}hrs`;
          pH1.textContent = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
          break;
        case "Play":
          liH2.textContent = `${data[1].timeframes.monthly.current}hrs`;
          pH2.textContent = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
          break;
        case "Study":
          liH3.textContent = `${data[2].timeframes.monthly.current}hrs`;
          pH3.textContent = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
          break;
        case "Exercise":
          liH4.textContent = `${data[3].timeframes.monthly.current}hrs`;
          pH4.textContent = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
          break;
        case "Social":
          liH5.textContent = `${data[4].timeframes.monthly.current}hrs`;
          pH5.textContent = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
          break;
        case "Self Care":
          liH6.textContent = `${data[5].timeframes.monthly.current}hrs`;
          pH6.textContent = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
          break;
      }
    }
  });
};

getData();
