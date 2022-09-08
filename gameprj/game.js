const startbtn = document.querySelector(".startbtn");
const fa_solid = document.querySelector("i");
const count = document.querySelector(".count");
const timer = document.querySelector(".timer");
const ten_digit = document.querySelector(".ten_digit");
const one_digit = document.querySelector(".one_digit");
const unit_field = document.querySelector(".unit_field");
const fieldRect = unit_field.getBoundingClientRect();
// const carrot = document.querySelector('carrot');
// const bug = document.querySelector('bug');
// 나중에 startstopcnt 리팩토링
var startstopcnt = 0;
var timercnt = 11;
var gamestatus = "stop";
var playtimer;
function gameStart() {
    // unit_count();
  startstopcnt += 1;
  if (startstopcnt % 2 == 0) {
    unit_create("carrot_unit", "/carrot/img/carrot.png", 10);
    unit_create("bug_unit", "/carrot/img/bug.png", 10)
    fa_solid.setAttribute("class", "fa-solid fa-stop");
    playtimer = setInterval(() => {
      if (timercnt > 0) {
        gameTimer();
      } else if(timercnt == 0) {
        clearInterval(playtimer);
      }
    }, 1000);
  } else {
    fa_solid.className = "fa-solid fa-play";
    clearInterval(playtimer);
    //여기에 html 성공메시지 
    return ;
  }
}

function unit_create(className, url, count ){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width;
    const y2 = fieldRect.height;
    for(let i=0; i<count; i++){
       var image = new Image();
       image.src = url;
       image.setAttribute('class',`${className}`);
       image.style.position = "absolute";
       const x = randomNumber(x1, x2);
       const y = randomNumber(y1, y2);
       console.log(`x: ${x}, y: ${y}`);
       image.style.top = `${y}px`;
       image.style.left = `${x}px`;
       unit_field.appendChild(image);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max-min) + min;
}

startbtn.addEventListener("click", (event) => {
  gameStart();
});
function initTimer() {
  ten_digit.InnerText("1");
}
function gameTimer() {
  console.log("1");
  timercnt--;
  if(timercnt>=10){
  timer.innerHTML = `00:${timercnt}`;
} else {
    timer.innerHTML = `0:0${timercnt}`;
}
}

//이제 벌레를 10마리를 만들어야해. function for문 이용해서, dom 객체 생성으로
//math random 배치 animation으로 움직이는것까지 추가하는 것은 추가 프로젝트로 