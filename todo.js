const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = []; //todolist가 추가 될때마다 []에 넣기

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    span.innerText = newTodo.text;
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
    //li태그를 만들고 span을 만들고 li의 자식태그로 span까지 만들어준다. span의 text를 변경
    //li 밑에 span과 button 태그 생성 append는 마지막에 넣어야한다.
    //<ul id="todo-list"></ul> 안에 넣어주는거 ㅋ
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //value값을 newTodo에 저장후 초기화
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //toDos가 새로고침 되지 않게 이전의 todos를 업데이트 해주는 것.
    parsedToDos.forEach(paintToDo);

    //forEach는 각 item에 대해 function을 실행시킨다.
    //localstorage에 저장된 것들을 각각paintToDo시킨다 
}