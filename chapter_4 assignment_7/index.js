const maxNumInput = document.querySelector("#max-num-input");
const guessNumInput = document.querySelector("#guess-num-input");
const playBtn = document.querySelector("#play-btn");
const inputForm = document.querySelector("form");

function handleInputNumbers(event) {
  event.preventDefault();
  const maxNum = maxNumInput.value;
  const guessNum = guessNumInput.value;

  localStorage.setItem("maxNumKey", maxNum);
  localStorage.setItem("guessNumKey", guessNum);

  const resultPart = document.querySelector("#results-part");
  const myChoseNum = document.querySelector("#my-chose-num");
  const machineChoseNum = document.querySelector("#machine-chose-num");
  const randomNum = Math.ceil(
    Math.random() * (maxNum - parseInt("0")) + parseInt("0")
  );
  console.log(typeof randomNum);
  const gameResults = document.querySelector("#game-results");
  resultPart.classList.remove("hidden-results");

  myChoseNum.innerText = guessNum;
  machineChoseNum.innerText = randomNum;
  const guessNumber = parseInt(guessNum);

  if (guessNumber !== randomNum) {
    gameResults.innerText = "You lost!";
  } else {
    gameResults.innerText = "You won!";
  }
}
inputForm.addEventListener("submit", handleInputNumbers);
playBtn.addEventListener("click", handleInputNumbers);

//오답 코드
/*const maxNumInput = document.querySelector("#max-num-input");
const guessNumInput = document.querySelector("#guess-num-input");
const playBtn = document.querySelector("#play-btn");

const maxNum = maxNumInput.value;
const guessNum = guessNumInput.value;

localStorage.setItem("maxNumKey", maxNum);
localStorage.setItem("guessNumKey", guessNum);

function handlePlayBtnSubmit(event) {
  event.preventDefault();
  const resultPart = document.querySelector("#result-part");
  const myChoseNum = document.querySelector("#my-chose-num");
  const machineChoseNum = document.querySelector("#machine-chose-num");
  const ZERO = "0";
  const gameResults = document.querySelector("#game-results");
  resultPart.classList.remove("hidden-results");
  myChoseNum.innerText = guessNum;
  const randomNum = Math.ceil(
    Math.random() * (maxNum - parseInt(ZERO, 10)) + parseInt(ZERO, 10)
  );
  machineChoseNum.innerText = randomNum;
  if (myChoseNum !== randomNum) {
    gameResults.innerText = "You lost!";
  } else {
    gameResults.innerText = "You Win!";
  }
}

playBtn.addEventListener("submit", handlePlayBtnSubmit);*/
