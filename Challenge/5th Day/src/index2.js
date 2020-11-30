const div = document.querySelector(".js-clock");
const clock = div.querySelector("h2");

function getTime() {

    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const now = new Date();
    
    let diff = new Date(xmasDay-now);
    //남은 일을 계산하기 위해 1000*60*60*24로 나눠야 한다.
    const diffDays = Math.floor((xmasDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    diff-=diffDays * (1000*60*60*24);
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    diff-=diffHours * (1000*60*60);
    const diffMinutes = Math.floor(diff / (1000*60));
    diff-=diffMinutes * (1000*60);
    const diffSeconds = Math.floor(diff / 1000);

    clock.innerHTML = `${diffDays < 10 ? `0${diffDays}` : diffDays}d
    ${diffHours < 10 ? `0${diffHours}` : diffHours}h 
    ${diffMinutes < 10 ? `0${diffMinutes}` : diffMinutes}m 
    ${diffSeconds < 10 ? `0${diffMinutes}` : diffSeconds}s
    ` ;



}

function init() {
    setInterval(getTime,1000);
}

init();