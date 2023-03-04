const images = ["0.png", "1.png", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//img 태그를 만들어주고 (물론 이 상태에선 아직 단순히 '만들어진'거지 document엔 없음)
const bgImage = document.createElement("img");
//img 태그에 .src property넣어 img 주소를 넣을 공간을 만들어주고
bgImage.src = `img/${chosenImage}`;
//img 태그와 src 프로퍼티가 담긴 bgImage를 body 태그 속에
//자식 태그로 넣어주면서 <img src="img/...">를 html에 넣어줌
document.body.appendChild(bgImage);
//appendChild는 document 가장 뒤에, prepend는 document 가장 위에 요소를 넣어줌
