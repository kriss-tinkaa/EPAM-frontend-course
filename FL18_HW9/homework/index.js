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

/* START TASK 2: Your code goes here */

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let phone = id("phone"),
    form = id("form"),
    errorMsg = classes("error"),
    sendBtn = id('btn'),
    label = id('label-phone');

// function validateForm() {}

phone.oninput = function() {
    let num = phone.value;
    console.log(num);
    var phoneRegx = /^\+?3?8?(0\d{9})$/;
    if (!num.match(phoneRegx)) {
        phone.style.borderColor = "red";
        sendBtn.removeAttribute("disabled", "");
        sendBtn.setAttribute("enabled", "");
        label.innerText = 'Type number does not follow format +380*********';
    } else {
        phone.style.borderColor = "green";
        sendBtn.removeAttribute("enabled", "");
        sendBtn.setAttribute("disabled", "");
        label.innerText = 'Data was succesfull sent'
    }

}



/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */