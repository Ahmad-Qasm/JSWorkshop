const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const dateElements = document.querySelectorAll(".deadline-format h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const expireDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const expireWeekDay = weekdays[expireDate.getDay()];
const expireDayDate = expireDate.getDate();
let expireMonth = expireDate.getMonth();
expireMonth = months[expireMonth];
const expireYear = expireDate.getFullYear();
const expireHours = expireDate.getHours();
const expireMinutes = expireDate.getMinutes();

giveaway.innerHTML = `Giveaway Ends On ${expireWeekDay}, ${expireDayDate} ${expireMonth} ${expireYear} ${expireHours}:${expireMinutes}am`;

const expireTime = expireDate.getTime();
const expireFn = () => {
  const today = new Date().getTime();
  const time = expireTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let remainedDays = time / oneDay;
  remainedDays = Math.floor(remainedDays);
  let remainedHours = Math.floor((time % oneDay) / oneHour);
  let remainedMinutes = Math.floor((time % oneHour) / oneMinute);
  let remainedSecunds = Math.floor((time % oneMinute) / 1000);

  dateElements.forEach((item, index) => {
    if (index === 0) item.innerHTML = remainedDays;
    if (index === 1) item.innerHTML = remainedHours;
    if (index === 2) item.innerHTML = remainedMinutes;
    if (index === 3) item.innerHTML = remainedSecunds;
  });
};

let countdown = setInterval(expireFn, 1000);
expireFn();
