const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorButton = document.querySelector("button");
const body = document.querySelector("body");

function handleButtonClick() {
  //linear-gradient를 중복되는 index 값이 없이 깔끔하게 만들기 위해 추가로 중복 없는 난수 추출 코드 작성
  let colorArrIndex = [];
  let i = 0;
  for (i = 0; i < 2; i++) {
    const randomIndexNum = Math.floor(Math.random() * colors.length);
    if (colorArrIndex.indexOf(randomIndexNum) === -1) {
      colorArrIndex.push(randomIndexNum);
    } else {
      i--;
    }
  }
  console.log(colorArrIndex);
  const firstRandomColor = colors[colorArrIndex[0]];
  const secondRandomColor = colors[colorArrIndex[1]];
  body.style.background = `linear-gradient(0.25turn, ${firstRandomColor}, ${secondRandomColor})`;
}

colorButton.addEventListener("click", handleButtonClick);
