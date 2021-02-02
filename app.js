var min = 0;
var sec = 0;
var miliSec = 0;


function callTimer() {
  miliSec++;
    if (miliSec < 100) {
            if (miliSec === 99) {
                         miliSec = 0;
                            sec++;
    if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }else{
        miliSec = 0;
    }
 document.getElementById("time").innerHTML = min + ":" + sec + " : " + miliSec;
}

function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}
function reset() {
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
  
    document.getElementById("time").innerHTML = min + ":" + sec + ":" + miliSec;
}







                                                                  Timer




var start = document.getElementById('start');
var reset = document.getElementById('reset');
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var startTimer = null;

start.addEventListener('click', function(){

    function startInterval(){

                               startTimer = setInterval(function() {
          
    timer();

        }  ,1000);
    }
    startInterval();
}
)

reset.addEventListener('click',function(){

    h.value = 0;
    m.value = 0;
    s.value = 0;

    stopInterval()
}
)

function timer(){

    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;

    } else if(s.value != 0){
        s.value--;

    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;

    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }

    return;
}
function stopInterval() {

    clearInterval(startTimer);
}


