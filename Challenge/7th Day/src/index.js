// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const pendingList = document.querySelector(".pendingList");
const finishList = document.querySelector(".finishList");

let todo = []
let finish = []

//Pending에 저장
function savePending() {
  localStorage.setItem("PENDING", JSON.stringify(todo));
}

//Finish에 저장
function saveFinish() {
  localStorage.setItem("FINISHED", JSON.stringify(finish));
}


//PENDING중인 것을 표현
function PendingList(newId, text) {
  //ul안의 li를 생성해 준다.
  const li = document.createElement("li");
  const finishBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  finishBtn.innerText = "finishButton";
  deleteBtn.innerText = "deleteButton";
  const span = document.createElement("span");
  li.innerText = text;
  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(finishBtn);
  li.appendChild(deleteBtn);
  //finishBtn를 누르면 FinishList에 올라간다.
  finishBtn.addEventListener("click", FinishLoadList);
  deleteBtn.addEventListener("click", function (event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    todo.pop(li.id);
    savePending();
  });
  li.id = newId;
  const toDoObj = {
    id: newId,
    text: text
  }
  todo.push(toDoObj);
  savePending();
}

//FINISH List에 올린다.
function FinishList(id, text) {
  //ul안의 li를 생성해 준다.
  const li = document.createElement("li");
  const pendingBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  pendingBtn.innerText = "pendingButton";
  deleteBtn.innerText = "deleteButton";
  const span = document.createElement("span");
  li.innerText = text;
  finishList.appendChild(li);
  li.appendChild(span);
  li.appendChild(pendingBtn);
  li.appendChild(deleteBtn);
  //finishBtn를 누르면 FinishList에 올라간다.
  pendingBtn.addEventListener("click", LoadList);
  deleteBtn.addEventListener("click", function (event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishList.removeChild(li);
    finish.pop(li.id);
    saveFinish();
  });
  li.id = id;
  const finishTodoObj = {
    id: id,
    text: text
  }
  finish.push(finishTodoObj);
  saveFinish();
}

function FinishLoadList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const inputText = localStorage.getItem("PENDING");
  if (inputText) {
    const parsedTodo = JSON.parse(inputText);
    parsedTodo.forEach(function (todo) {
      if (todo.id === todo.id) {
        FinishList(todo.id, todo.text);
      }
    });
  }
  /*
  const cleanToDoList = todo.filter(function filterFn(list){
    return list.id === parseInt(li.id);
  });*/
  todo.pop(li.id);
  savePending();

}

/**localStorage에 있을 경우 화면에 나타내준다. */
function LoadList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishList.removeChild(li);
  const inputText = localStorage.getItem("FINISHED");
  if (inputText) {
    const parsedTodo = JSON.parse(inputText);
    parsedTodo.forEach(function (finish) {
      PendingList(finish.id, finish.text)
    });
  }
  finish.pop(li.id);
  saveFinish();
}


/**입력값을 받고 PendingList에 올려놓는다. */
function handleSubmit(event) {
  event.preventDefault();
  const words = input.value;
  newId = Math.floor(Math.random() * 100000) + 1;
  PendingList(newId, words);
  input.value = "";
}


function init() {
  form.addEventListener("submit", handleSubmit);
  if (localStorage.getItem("PENDING")) {
    const inputText = localStorage.getItem("PENDING");
    if (inputText) {
      const parsedTodo = JSON.parse(inputText);
      parsedTodo.forEach(function (todo) {
        PendingList(todo.id, todo.text);
      });
    }
  }
  if (localStorage.getItem("FINISHED")) {
    const inputText = localStorage.getItem("FINISHED");
    if (inputText) {
      const parsedTodo = JSON.parse(inputText);
      parsedTodo.forEach(function (finish) {
        FinishList(finish.id, finish.text);
      });
    }
  }
}

init();