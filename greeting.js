const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "currentUser",//currentUser라는 key값을 생성 
SHOWING_CURRENT="showing";

//이름 저장
function saveName(text){
    localStorage.setItem(USER_LOCALSTORAGE, text);
}


//form태그에서 이름을 입력했을 경우 submit되는 함수 
function handleSubmit(event){
    event.preventDefault();//enter를 쳤을 때 아무런 반응을 하지 않게 하기 위해
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

//유저가 없을 경우 이름을 넣어주는 함수
function askFormName(){
    form.classList.add(SHOWING_CURRENT);
    form.addEventListener("submit",handleSubmit)
}

//유저가 있을 경우 색칠을 해주는 함수
function paintGreeting(text){
    form.classList.remove(SHOWING_CURRENT);//form을 지우고
    greeting.classList.add(SHOWING_CURRENT);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);//현재의 이름값을 가져온다.
    if(currentUser === null){
        askFormName();
    }else{
        paintGreeting(currentUser);//currentUser가 있을 경우 색칠해준다.
    }
}//input태그에 입력한 값을 load하는 것

function init() {
    loadName();
}

init();