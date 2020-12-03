const range = document.getElementById("js-range");
const h3 = document.querySelector(".js-title");
const form = document.getElementById("js-form");
const result = document.getElementById("js-result");

function handleRangeInput(event) {
    const span = h3.querySelector("span");
    span.innerHTML = range.value;
}

//form태그에서 submit기능을 막고 input값을 화면상에 표시해준다.
function handleInputSubmit(event){
    event.preventDefault();
    const input = form.querySelector("input");
    const randomNumber = Math.floor(Math.random()*(range.value-0)+0);
    result.innerHTML = "You chose "+input.value+" the machine chose "+randomNumber+".";
    if(input.value == randomNumber){
        result.innerHTML+="<h3>\nYou won!</h3>";
    }
    else{
        result.innerHTML+="<h3>\nYou lost!</h3>";
    }
}

function init() {
    range.addEventListener("input", handleRangeInput);
    form.addEventListener("submit",handleInputSubmit);
}

init();