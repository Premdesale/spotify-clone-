const playBtn = document.querySelector("#play-btn");

const song = document.querySelector("#song");

const progressBar = document.querySelector(".progress-bar");

const currentTime = document.querySelector(".current-time");

const volumeBar = document.querySelector(".volume-bar");

let isPlaying = false;


// PLAY & PAUSE
playBtn.addEventListener("click", function () {

    if (isPlaying === false) {

        song.play();

        isPlaying = true;

        playBtn.src = "./assests/pause1-button.png";

    }

    else {

        song.pause();

        isPlaying = false;

        playBtn.src = "./assests/player_icon3.png";

    }

});


// PROGRESS BAR MOVEMENT
song.addEventListener("timeupdate", function () {

    let progress = (song.currentTime / song.duration) * 100;
    if (isNaN(progress)) {
        progress = 0;
    }
    progressBar.value = progress;


    // CURRENT TIME

    let minutes = Math.floor(song.currentTime / 60);

    let seconds = Math.floor(song.currentTime % 60);

    if (seconds < 10) {

        seconds = "0" + seconds;

    }

    currentTime.innerText = `${minutes}:${seconds}`;

});


// CHANGE SONG POSITION USING PROGRESS BAR
progressBar.addEventListener("input", function () {

    song.currentTime = (progressBar.value / 100) * song.duration;

});
volumeBar.addEventListener("input", function () {

    song.volume = volumeBar.value;

});