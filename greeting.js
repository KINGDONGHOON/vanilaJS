const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input"); //input 찾기
//const loginButton = loginForm.querySelector("button"); //button 찾기
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"; //string은 const로 고정 시켜줄 수 있다.
const USERNAME_KEY = "username" //대문자 변수로 만드는게 관행

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)//hidden 클래스 이름 없애기
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(abc) {
    greeting.innerText = `Good day, ${abc}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greeting
    paintGreetings(savedUsername)
    loginForm.classList.add(HIDDEN_CLASSNAME);
}
