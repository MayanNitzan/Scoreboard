let pEl1 = 0
let pEl2 = 0
let homeScore = document.getElementById("number1")
let guestScore = document.getElementById("number2")

function more1() {
    pEl1 += 1
    homeScore.textContent = pEl1
}

function more2() {
    pEl1 += 2
    homeScore.textContent = pEl1
}

function more3() {
    pEl1 += 3
    homeScore.textContent = pEl1
}

function more11() {
    pEl2 += 1
    guestScore.textContent = pEl2
}

function more22() {
    pEl2 += 2
    guestScore.textContent = pEl2
}

function more33() {
    pEl2 += 3
    guestScore.textContent = pEl2
}

function newgame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    pEl1 = 0
    pEl2 = 0
}