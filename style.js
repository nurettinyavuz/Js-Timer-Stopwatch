const time=document.querySelector('.container .timer');
const start_btn=document.getElementById("start_btn");
const stop_btn=document.getElementById("stop_btn");
const reset_btn=document.getElementById("reset_btn");

let seconds = 0;
let interval = null; 

start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

function timer(){
    seconds++;

    let hours=Math.floor(seconds/3600);
    let mins = Math.floor((seconds-(hours*3600)) / 60);  
    let secs = seconds %60;
    //Yani her 60 saniye bir dakikaya eşit
    //Her 60 dakika 1 saate eşit

    if(secs<10){
        secs='0'+secs;
    }
    if(mins<10){
        mins='0'+mins;
    }
    if(hours<10){
        hours='0'+hours;
    }
    
    time.innerText =`${hours}:${mins}:${secs}`
}

function start(){
    if(interval){
        return
    }
    interval =setInterval(timer,1000);

}
function stop(){
    clearInterval(interval);
    interval=null

}
function reset(){
    stop();
    seconds=0;
    time.innerText='00:00:00';

}
