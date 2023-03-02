const images = ["0.png", "1.png", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//document에 img 태그를 만들어주고
const bgImage = document.createElement("img");
//img 테그에 .src property넣어 img 주소를 넣어주고
bgImage.src = `img/${chosenImage}`;
//img 태그와 src 프로퍼티가 담긴 bgImage를 body 태그 속에
//자식 태그로 넣어주면서 <img src="img/...">를 html에 넣어줌
document.body.appendChild(bgImage);
