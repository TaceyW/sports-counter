
let scoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let score = 0
let guestScore = 0

function incriment1() {
    score += 1
    scoreEl.textContent = score
}

function incriment2() {
    score += 2
    scoreEl.textContent = score
}

function incriment3() {
    score += 3
    scoreEl.textContent = score
}

function guestIncriment1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
} 

function guestIncriment2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestIncriment3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

