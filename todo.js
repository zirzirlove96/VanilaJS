const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [] //해야할 일들을 list에 담아준다.

//delete버튼을 눌렀을 경우 event
function deleteToDos(event){
    const btn = event.target;//button을 찾아줌
    const li = btn.parentNode;//삭제할 li를 찾아줌
    toDoList.removeChild(li);//todoList의 자식이 li를 지우기 위해 removeChild사용
    const cleanToDos = toDos.filter(function filterFn(toDo){
        return toDo.id===parseInt(li.id);
        //list안에 있는 id값과 li태그 안의 id값이 같아야 지워진다.
    });
    toDos = cleanToDos;
    saveToDos();//지우고 local에 저장한다.
} 

function saveToDos() {
    //toDos를 가져와서 로컬에 저장하는 함수
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //localStorage는 string값만 저장한다.
    //자바스크립트 object를 string으로 바꿔준다 - JSON.stringfy

}

//toDoList ul태그부분에 넣는 것
function paintTo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="delete";
    const span = document.createElement("span");
    const newId = toDos.length+1
    span.innerText=text;
    delBtn.addEventListener("click",deleteToDos);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;//li태그의 id요소에 값을 줄 수 있다.
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id:newId
    }//입력해 준 값들을 array에 담기 위해 객체 활용
    toDos.push(toDoObj);//array안에 element를 넣어준다.
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const loadtoDos = localStorage.getItem(TODOS_LS);//임시로 저장을 하는 localStorage에서 입력값 가져옴
    if(loadtoDos!==null){
        //JSON.stringfy를 사용하여 string타입으로 변환된 데이터를
        //object타입으로 변환하여 나타내 준다.
        const parsetoDos = JSON.parse(loadtoDos);
        parsetoDos.forEach(function(toDo){//forEach는 array를 사용할 때 사용
            paintTo(toDo.text);
        });//object타입으로 변환한 toDos를 나타내기 위해 forEach를 사용하여 하나씩 나오게 한다.
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();