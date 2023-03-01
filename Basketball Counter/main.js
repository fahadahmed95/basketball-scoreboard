//Home Section//

let homeCount = 0;
let changeCount = document.getElementById("home-btn")

function plusOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}

function plusTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}

function plusThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}

//away section//

let awayCount = 0;
let awayCountChange = document.getElementById("away-btn")

function guestPlusOne() {
    awayCount += 1;
    awayCountChange.textContent = awayCount;
}

function guestPlusTwo() {
    awayCount += 2;
    awayCountChange.textContent = awayCount;
}

function guestPlusThree() {
    awayCount += 3;
    awayCountChange.textContent = awayCount;
}