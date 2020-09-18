const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//toDoList ul태그부분에 넣는 것
function paintTo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="delete";
    const span = document.createElement("span");
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);//임시로 저장을 하는 localStorage에서 입력값 가져옴
    if(toDos!==null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();