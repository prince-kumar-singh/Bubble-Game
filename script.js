var clutter = "";
var timer = 60;
var score = 0;
var hitrn =0;
function increaseScore(){
    score+=10
    document.querySelector("#scorevalue").textContent = score;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#hitval").textContent =hitrn
}

function makeBubble(){
    for(var i = 0; i <152;i++){
        var rn = Math.floor(Math.random() *10)
        clutter += `<div class='bubble'>${rn}</div>`
    }
    document.querySelector('#pbottom').innerHTML = clutter; 
    clutter =''
}

function runTimer(){
    var timerint = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").innerHTML = timer;            
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game over</h1>`
        }
    },1000)
}

document.querySelector("#pbottom").addEventListener("click", function(detail){
  var clickedNum = Number(detail.target.textContent);
  console.log(clickedNum)
  if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
    
  }  
})

runTimer();
makeBubble();
getNewHit();
