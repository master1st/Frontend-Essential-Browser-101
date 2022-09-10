const startbtn = document.querySelector(".startbtn");
const fa_solid = document.querySelector("i");
const count = document.querySelector(".count");
const timer = document.querySelector(".timer");
const ten_digit = document.querySelector(".ten_digit");
const one_digit = document.querySelector(".one_digit");
const unit_field = document.querySelector(".unit_field");

const fieldRect = unit_field.getBoundingClientRect();
const message = document.querySelector('.message');
const pop_up = document.querySelector('.pop_up');

var winMsg = "You Win !";
var loseMsg = "You lose !";
var restartMsg = "game again ?";


var childbugcnt = 0;
var unit_count = 10;
var unitSize = 70;
var startstopcnt = 0;
var timercnt = 11;
var gamestatus = "stop";
var playtimer;
var image;
count.innerHTML = 0;


 function initGame() {
  startstopcnt += 1;
  if (startstopcnt % 2 !== 0) {
    unit_create("carrot_unit", "/carrot/img/carrot.png", unit_count);
    unit_create("bug_unit", "/carrot/img/bug.png", unit_count);
    unit_count_init();
    document.addEventListener('click', (e) => {
       unit_remove(e);
    });
    fa_solid.setAttribute("class", "fa-solid fa-stop");
    playtimer = setInterval(() => {
        showPopup(startstopcnt);
      if (timercnt > 0) {
        gameTimer();
      } else if(timercnt == 0) {
        clearInterval(playtimer);
      }
    }, 1000);
  } else {
    showPopup(startstopcnt);
    fa_solid.className = "fa-solid fa-play";
    clearInterval(playtimer);
  }
}



startbtn.addEventListener("click", (event) => {
    initGame();
  });


function unit_create(className, url, count ){
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width-unitSize;
    const y2 = fieldRect.height-unitSize;
    for(let i=0; i<count; i++){
       image = new Image();
       image.src = url;
       image.setAttribute('class',`${className}`);
       image.style.position = "absolute";
       const x = randomNumber(x1, x2);
       const y = randomNumber(y1, y2);
       image.style.top = `${y}px`;
       image.style.left = `${x}px`;
       unit_field.appendChild(image);
    }
}
function unit_count_init() {
    unit_field.childNodes.forEach((item) => {
        if(item.className === 'bug_unit'){
         childbugcnt += 1;
        } 
     });
     count.innerHTML = childbugcnt;
};
function unit_remove(e) {
    if(e.target.className === "bug_unit"){
        unit_field.removeChild(e.target);
        count.innerText = childbugcnt-=1; 
        console.log(timercnt);
    }
    if(childbugcnt === 0){
        clearInterval(playtimer);
    }
};
function randomNumber(min, max) {
    return Math.random() * (max-min) + min;
}
function initTimer() {
  ten_digit.InnerText("1");
}
function showPopup(startstopcnt) {
    if(startstopcnt %2 === 0){
        message.innerHTML = restartMsg;
        pop_up.style.display = "block";
    }
    if(timercnt === 0 && childbugcnt > 0){
    message.innerHTML = loseMsg;
    pop_up.style.display = "block";
    } else if(timercnt > 0 && childbugcnt === 0){
        message.innerHTML = winMsg;
        pop_up.style.display = "block";
    } 
}
function gameTimer() {
  timercnt--;
  if(timercnt>=10){
  timer.innerHTML = `00:${timercnt}`;
} else {
    timer.innerHTML = `0:0${timercnt}`;
}
}

/* 목표
1.일단 먼저만들고 
2.강의보고
3.개념 notion에 정리하고
4.프로젝트 개선, 확장 
*/