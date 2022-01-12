var msec = 0;
var sec = 0;
var min = 0;
var interval;

var msecH = document.getElementById('msec');
var secH = document.getElementById('sec');
var minH = document.getElementById('min');

function timer(){
    msec++;
    msecH.innerHTML = msec;
    if(msec >= 100){
        msec = 0 ;
        sec++;
        secH.innerHTML = sec;
    }else if(sec>= 60) {
        min++;
        sec = 0;
        minH.innerHTML = min;
    }

}

function start(){
    interval = setInterval(timer , 10) ;
    document.getElementById('btn').disabled = true
}

function stop(){
    clearInterval(interval);
    document.getElementById('btn').disabled = false
}

function reset(){
    min = 0;
    sec = 0 ;
    msec = 0;

    minH.innerHTML = min;
    secH.innerHTML = sec;
    msecH.innerHTML = msec;

    clearInterval(interval);
    document.getElementById('btn').disabled = false

}