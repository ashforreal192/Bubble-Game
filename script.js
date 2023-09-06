var timer = 60
var score = -10
var hitrn = 0


function increaseScore() {
    score += 10
    document.querySelector("#scoreValue").textContent = score
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitValue").textContent = hitrn
}

function makeBubble() {
    var clutter = ""
    for (let i = 1; i <= 160; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter
}



function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#TimerValue").textContent = timer;
        } else {
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML = `<h1>Game has ended</h1><h2>And you scored "${score}"</h2>`
        }
    }, 1000)
}


document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent)
    if (clickedNum === hitrn) {
        increaseScore()
        makeBubble()
        getNewHit()
    }
})


runTimer()
makeBubble()
getNewHit()
increaseScore()