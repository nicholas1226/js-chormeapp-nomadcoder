const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // username이라는 string이 반복되어 magical string을 하나 만들어줌
// 본인이 만든 string이 반복해서 쓰일 경우엔 해당 string을 대문자 상수로 저장해놓는 것이 좋음

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // username이라는 key를 함수 내부에서 파라미터로 쓰기 때문에 넣어줌
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  // 문제는 form이 원래 브라우저에 처음부터 나타나고 있는 상태라는 것
  // form과 greeting을 모두 숨기고 시작하자
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //form을 통해 submit을 해야 함수를 작동시킬 수 있으니깐
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
