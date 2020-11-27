//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const div = document.querySelector(".js-clock");
const clock = div.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();
  const day = (xmasDay.getDate()-date.getUTCDate())+31//NINE_HOURS_MILLISECONDS
  const hours = 23-date.getHours();//(date.getHours()-xmasDay.getHours());
  const minutes = 59-(date.getMinutes()-xmasDay.getMinutes());
  const seconds = 59-(date.getSeconds()-xmasDay.getSeconds());

  clock.innerHTML = `${day < 10 ? `0${day}` : day}d
                     ${hours < 10 ? `0${hours}` : hours}h  
                      ${minutes < 10 ? `0${minutes}` : minutes}m  
                      ${seconds < 10 ? `0${seconds}` : seconds}s`;

}

function init() {
  setInterval(getTime, 1000);
}

init();
