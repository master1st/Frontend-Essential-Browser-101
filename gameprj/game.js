const startbtn = document.querySelector('.startbtn');
const fa_solid = document.querySelector('i');
const count = document.querySelector('count');
var startstopcnt = 0;
var gamecnt = 10;
var gamestatus = "stop";
function gameStart(){
    startstopcnt += 1;
    if(startstopcnt%2==0){
        fa_solid.setAttribute("class", "fa-solid fa-stop");
        Timer(gamestatus);
    }
    else{
        fa_solid.className ="fa-solid fa-play";
    }
}

startbtn.addEventListener('click', (event) => {
    gameStart();
})

function Timer(gamestatus) {
    gamecnt--;
}
setTimeout(() => {
    Timer("hello");
}, 1000);


clearInterval, setTimeout 