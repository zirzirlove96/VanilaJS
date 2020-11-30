//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const KSThours = NINE_HOURS_MILLISECONDS/(60*60*1000);
//UTC시간에서 KST시간으로 구하기 위해
const div = document.querySelector(".js-clock");
const clock = div.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-3:00:00:00+0900");
  const date = new Date();
  const day = (xmasDay.getDate()-date.getUTCDate())
  const hours = 23-(date.getUTCHours()+KSThours);
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
