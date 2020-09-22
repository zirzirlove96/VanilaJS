const body = document.querySelector("body");

const IMG_NUMBER=3;


function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber+1}.jpg`;//1을 더하는 이유는 0부터 시작하기 때문이다.
    image.classList.add("bgImage");
    //classList는 class이름을 바꿔주는 것이다.
    //body.appendChild(image);//appendChild를 사용하면 선택한 body에 자식 요소를 추가
    body.prepend(image);//background로 이미지를 줘야하므로
}

function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);//사진을 랜덤으로 뽑기 위해
    console.log(number);
    return number;
}

function init() {
    const randomNumber = getRandom();//사진 이름
    paintImage(randomNumber);//image를 로드해 주는 함수
}

init();