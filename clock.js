const clockContainer = document.querySelector(".js-clock"),
//querySelector는 첫 번째 element를 반환해 준다.
      clockTitle = clockContainer.querySelector("h1");

//시간을 구해주는 함수 
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    /*
    if(hours < 10)
        clockTitle.innerHTML = `0${hours}:${minutes}:${seconds}`;
    else if(minutes < 10)
        clockTitle.innerHTML = `${hours}:0${minutes}:${seconds}`;
    else if(seconds < 10)
        clockTitle.innerHTML = `${hours}:${minutes}:0${seconds}`;
    else
        clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
    */
   clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours} : 
                           ${minutes < 10 ? `0${minutes}` : minutes} : 
                           ${seconds < 10 ? `0${seconds}` : seconds}` ;
    //if문을 사용
}

function init() {
    setInterval(getTime,1000);//setInterval이라는 내장함수를 이용하여 자동적으로 1초마다 시간이 변경되게 해준다.
}

init();