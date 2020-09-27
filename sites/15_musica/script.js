var audio = document.getElementById('song');
var ButtonPlayPause = document.getElementById('play-pause');
var count = 0;

let background = document.querySelector('#play-pause');


background.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url("castlevania-bg.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
})


function playAndPause() {
    if(count == 0) {
        count = 1;
        audio.play();
        ButtonPlayPause.innerHTML = "Pause " + '<i class="fas fa-pause-circle"></i>';
    }
    else {
        count = 0;
        audio.pause();
        ButtonPlayPause.innerHTML = "Play  &nbsp&nbsp" + '<i class="fas fa-play-circle"></i>';
    }
}

function hideTitle(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'none';
}

// function stop() {
//     audio.play()
//     audio.pause();
//     audio.currentTime = 0;
//     ButtonPlayPause.innerHTML = "Play"
// }