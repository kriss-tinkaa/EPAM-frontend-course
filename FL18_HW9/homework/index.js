/* eslint-disable eqeqeq */
"use strick"

let cell = document.getElementsByClassName('table__cell');
let specialCell = 5;

[].forEach.call(cell, function(el) {

    el.addEventListener('click', function() {
        if (el.dataset.option === 1 || el.dataset.option === 4 || el.dataset.option === 7) {
            this.style.backgroundColor = 'blue'
        } else if (el.dataset.option == 5) {
            this.style.backgroundColor = 'green';
            [].forEach.call(cell, function(el) {
                if (el.style.backgroundColor !== 'yellow' && el.style.backgroundColor !== 'blue') {
                    el.style.backgroundColor = 'green'
                }
            });
        } else {
            this.style.backgroundColor = 'yellow'
        }
    })
})


let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let phone = id("phone"),
    form = id("form"),
    errorMsg = classes("error"),
    sendBtn = id('btn'),
    label = id('label-phone');

phone.oninput = function() {
    let num = phone.value;
    console.log(num);
    var phoneRegx = /^\+?3?8?(0\d{9})$/;
    if (!num.match(phoneRegx)) {
        phone.style.borderColor = "red";
        sendBtn.removeAttribute("disabled", "");
        sendBtn.setAttribute("enabled", "");
        label.innerText = 'Type number does not follow format +380*********';
        label.style.color = 'red';
    } else {
        phone.style.borderColor = "green";
        sendBtn.removeAttribute("enabled", "");
        sendBtn.setAttribute("disabled", "");
        label.innerText = 'Data was succesfull sent';
        label.style.color = 'green';
    }

}

let court = id('task3');
let ball = id('ball');

let firstTeam = 0;
let secondTeam = 0;

let teamA = id('teams-A');
let teamB = id('teams-B');


court.addEventListener('click', function(event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - court.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - court.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) {
        ballCoords.top = 0
    }
    if (ballCoords.left < 0) {
        ballCoords.left = 0
    }
    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
        ballCoords.left = court.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
        ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';

    if (ballCoords.left < 40 && ballCoords.top > 80 && ballCoords.top < 208) {
        secondTeam++;
        teamB.innerText = secondTeam;
        console.log(secondTeam);
    }

    if (ballCoords.left > 520 && ballCoords.top > 80 && ballCoords.top < 208) {
        firstTeam++;
        teamA.innerText = firstTeam;
        console.log(firstTeam);

    }

    console.log(ballCoords.left)
    console.log(ballCoords.top)
})