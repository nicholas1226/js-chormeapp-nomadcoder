const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// 바로 시계가 로드되도록 미리 시계 함수를 실행 후, setInterval을 통해 시계 함수를 이어감.
setInterval(getClock, 1000);
