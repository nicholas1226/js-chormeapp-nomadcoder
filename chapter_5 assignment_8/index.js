const clockTitle = document.querySelector(".js-clock");

function calculateDday() {
  const todayDate = new Date();
  const xmasDate = new Date("december 25 2023");
  const untilXmas = xmasDate - todayDate;
  const untilXmasDate = String(
    Math.floor(untilXmas / (1000 * 60 * 60 * 24))
  ).padStart(2, "0"); //padStart로 만들기 위해선 우선 문자열이 되어야 함!
  // 이미 세자리 문자열인 상태에서 2, "0"을 해도 상관은 없는 듯
  const untilXmashours = String(
    Math.floor((untilXmas / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  // 계산이 어려웠음. date를 제외한 hours mins secs는 결국 나머지를 구하는 것임을 이해하면 됨.
  // Math.floor는 주어진 수의 같거나 작은 정수 중 큰 수를 반환함. 즉, 소수만 제외해주는 함수.
  const untilXmasMins = String(
    Math.floor((untilXmas / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const untilXmasSecs = String(Math.floor((untilXmas / 1000) % 60)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${untilXmasDate}d ${untilXmashours}h ${untilXmasMins}m ${untilXmasSecs}s`;
}

setInterval(calculateDday, 1000);
