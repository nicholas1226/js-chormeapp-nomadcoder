//2-5 Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the Array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy);

//2-6 Object
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

//Object 생성 - object에 대해 설명이 필요한 특성이 있을 경우 사용
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);

//Object에서 property를 얻어오는 법
console.log(player.name);
console.log(player["name"]);

//Object 속 property를 업데이트 하는 법
console.log(player);
player.fat = false;
console.log(player);

//Object 속 property를 추가하는 법
console.log(player);
player.lastName = "potato";
console.log(player);

//Object 속 property에 숫자를 더하는 법
console.log(player);
player.points = player.points + 15;
console.log(player);

//2-7
// function은 반복해서 사용할 수 있는 코드 조각
console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Flynn");

// function is encapsulate a piece of code
function sayHello() {
  console.log("Hello my name is C");
}

sayHello();
sayHello();
sayHello();
sayHello();

//Hello my name is A, B, C를 각각 보내기 위해서는 인수(argument)를 보내야 함.
//function을 실행하는 동안 어떤 정보를 function에 보낼 수 있는 방법
alert();
console.log();
//위와 같이 함수 파라미터 내에 아무 것도 안넣었을 때는 함수에 포함되는 내용이 없이 출력됨.

//2-8 본격적인 파라미터 사용법
//파라미터는 하나 이상 받을 수 있음
//파라미터 = 데이터를 function에 보내는 방밥
//함수 파라미터 사용 방식 1
function sayHelloGuys(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHelloGuys("nico", 20);
sayHelloGuys("dal", 40);
sayHelloGuys("lynn", 30);

//각 함수의 파라미터 변수들은 각 함수 내에서만 존재하는 지역 변수, 따라서 밖에서는 존재하지 않음.
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function devide(a, b) {
  console.log(a / b);
}
//함수 파라미터 사용 방식 1의 출력 방식
plus(8, 60);
devide(10, 3);

//함수 파라미터 사용 방식 2
const player2 = {
  name: "nico",
  sayHelloThere: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName + " nice to meet you");
  },
};

//함수 파라미터 사용 방식 2의 출력 방식
// 아래 방식은 function이 object 안에 있을 때만 가능함.
player2.sayHelloThere("lynn");

//https://axce.tistory.com/55 참고해서 파라미터 파트 정리하기
function changeName(obj) {
  obj.name = "coder";
}
const axce = { name: "axce" };
changeName(axce);
console.log(axce);

//2-11 return
//함수 자체로 어떤 일을 수행하고 그 결과를 알려주기 위해선?(without concole.log())
//return은 function이 function 밖과 소통하는 방법
const age = 96;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

//return이 필요한 이유
const calculator = {
  plus: function (a, b) {
    return a + b;
    //return에서 함수는 작동을 멈춤(파이썬처럼)
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  devide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
//return이 필요한 이유: 코드 간의 상호의존
//만약 리턴을 하지 않으면, 함수는 결과를 갖지 못하고, undefined 상태라 아래처럼
//변수에 함수를 넣어도 아무 값도 출력되지 않음.
const plusResult = calculator.plus(2, 4);
const minusResult = calculator.minus(3, plusResult);
const timesResult = calculator.times(minusResult, plusResult);
const devideResult = calculator.devide(plusResult, timesResult);
const powerResult = calculator.power(10, plusResult);

//2-13 conditionals(조건문)_1
const ageOfYou = parseInt(prompt("How old are you?"));
//prompt는 아주 오래된 방식, 그래서 이젠 거의 안씀

console.log(typeof ageOfYou);
//typeof으로 데이터 타입을 알 수 있음
//NaN = not a number (숫자가 아님)

//2-14 조건문_2
if (isNaN(ageOfYou)) {
  //isNaN은 숫자를 받아 boolean을 출력함.
  //입력된 값이 숫자가 아니면 True, 숫자라면 False)
  console.log("plz write a number");
} else {
  console.log("thank you for writing your age.");
}

//2-15 조건문_3
const ageOfU = parseInt(prompt("How old are you?"));

if (isNaN(ageOfU) || ageOfU < 0) {
  console.log("plz write a real positive number");
} else if (ageOfU < 18) {
  console.log("you are too young.");
} else if (ageOfU >= 18 && ageOfU <= 50) {
  console.log("you can drink");
} else if (age === 100) {
  console.log("wow");
} else {
  console.log("you can't drink");
}
//&& || === !== 정리하기
