const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const pendingli = document.querySelector(".pendingList");
const finishli = document.querySelector(".finishList");

let todoList = []
let finishList = []

function saveToDo() {
  localStorage.setItem("PENDING", JSON.stringify(todoList));
}

function saveComplete() {
  localStorage.setItem("FINISHIED", JSON.stringify(finishList));
}


function pendingToDoList(id, text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    pendingli.removeChild(li);
    todoList.pop(li.id);
    saveToDo();
  });
  delBtn.innerText = "❌";
  const finishBtn = document.createElement("button");
  finishBtn.addEventListener("click", (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    pendingli.removeChild(li);
    todoList.pop(li.id);
    saveToDo();
    console.log(li.firstChild.innerText);
    finishedList(li.id, li.firstChild.innerText);
  });
  finishBtn.innerText = "📕"
  li.id = id;
  span.innerText = text;
  pendingli.appendChild(li);
  li.appendChild(span);
  li.appendChild(finishBtn);
  li.appendChild(delBtn);
  const pendingObj = {
    id: id,
    text: text
  }
  todoList.push(pendingObj);
  saveToDo();
}

function finishedList(id, text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    finishli.removeChild(li);
    finishList.pop(li.id);
    saveComplete();
  });
  delBtn.innerText = "❌";
  const pendingBtn = document.createElement("button");
  pendingBtn.addEventListener("click", (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    finishli.removeChild(li);
    finishList.pop(li.id);
    saveComplete();
    //li의 첫번째 자식 span의 innerText값을 가져온다.
    pendingToDoList(li.id, li.firstChild.innerText);
  });
  pendingBtn.innerText = "📖"
  li.id = id;
  span.innerText = text;
  finishli.appendChild(li);
  li.appendChild(span);
  li.appendChild(pendingBtn);
  li.appendChild(delBtn);
  let finishObj = {
    id: id,
    text: text
  }
  finishList.push(finishObj);
  saveComplete();
}



function handleSubmitForm(event) {
  event.preventDefault();
  const newId = Math.floor(Math.random() * 100000) + 1;
  const inputText = input.value;
  pendingToDoList(newId, inputText);
  input.value = "";
}

function init() {
  form.addEventListener("submit", handleSubmitForm);
  if (localStorage.getItem("PENDING")) {
    const list = localStorage.getItem("PENDING");
    const parsedToDos = JSON.parse(list);//객체를 풀어준다.
    parsedToDos.forEach(function (todo) {
      pendingToDoList(todo.id, todo.text);
    });

  }
  if (localStorage.getItem("FINISHIED")) {
    const list = localStorage.getItem("FINISHIED");
    const parsedFinish = JSON.parse(list);
    parsedFinish.forEach(function (list) {
      finishedList(list.id, list.text);
    });

  }
}


init();