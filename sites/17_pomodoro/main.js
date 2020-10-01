var buttonStart = document.getElementById('buttonStart');
var buttonReset = document.getElementById('buttonReset');
var buttonPause = document.getElementById('buttonPause');

var startMinutes = document.getElementById('startMinutes');
var startSeconds = document.getElementById('startSeconds');

var breakMinutes = document.getElementById('breakMinutes');
var breakSeconds = document.getElementById('breakSeconds');

var startTimer;

buttonStart.addEventListener('click', function(){
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    }
    else {
        alert('O tempo ainda não acabou!')
    }
})

buttonReset.addEventListener('click', function(){
    startMinutes.innerText = 25;
    startSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    pauseInterval()
    startTimer = undefined;
})

buttonPause.addEventListener('click', function(){
    pauseInterval()
    startTimer = undefined;
})

function timer() {
// StartTimer counter
    if(startSeconds.innerText != 0) {
        startSeconds.innerText--;
    }
    else if(startMinutes.innerText != 0 && startSeconds.innerText == 0) {
        startSeconds.innerText = 59;
        startMinutes.innerText--;
    }

// BreakTimer counter
    if(startMinutes.innerText == 0 && startSeconds.innerText == 0) {
        if(breakSeconds.innerText != 0) {
            breakSeconds.innerText--;
        }
    }
    else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
        breakSeconds.innerText = 59;
        breakMinutes.innerText--;
    }

// CycleCounter
    if(startMinutes.innerText == 0 && startSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0) {
        startMinutes.innerText = 25;
        startSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

function pauseInterval() {
    clearInterval(startTimer);
}
