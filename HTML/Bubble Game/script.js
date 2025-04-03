var timer = 60;
var score = 0;
var rn = 0;

function setBubble() {
    var cautter = "";

    for (var i = 1; i <= 114; i++) {
        var rm = Math.floor(Math.random() * 10);
        cautter += `<div class="bubble">${rm}</div>`;
    }

    document.querySelector("#pbtn").innerHTML = cautter;
}

function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML = `<h1>Game Over!</h1>`;
        }
    }, 1000);
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtn").addEventListener("click", function (dets) {
    var clickdNum = Number(dets.target.textContent);
    if (clickdNum == rn) {
        increaseScore();
        setBubble();
        getNewHit();
    }
});

setBubble();
getNewHit();
runTimer();

