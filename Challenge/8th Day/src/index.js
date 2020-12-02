// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let slider = document.getElementById("myRange");//input range
let output = document.getElementById("demo");//range값
const playButton = document.querySelector("button");//button
const resultdiv = document.getElementById("result");//you lost or you won

function handleButton(evnet) {
  let random = Math.floor(Math.random() * (slider.value - 0) + 0);
  //random으로 돌린다.
  resultdiv.innerHTML = "you chose: "+input.value+", the machine chose: "+random+".";
  if(input.value == random){
    resultdiv.innerHTML+="\n you won!";
  }
  else{
    resultdiv.innerHTML+="\n you lost!";
  }
}

function init() {
  slider.oninput = ()=>{
    const input = document.getElementById("input").value; //내가 입력한 값
  output.innerHTML = slider.value;//range의 값 
  playButton.addEventListener("click", handleButton);
  }
}
