'use strict';

function isEquals(firstNum, secondNum) {
    return firstNum === secondNum;
}

function isBigger(firstArg, secondArg) {
    return firstArg > secondArg;
}

function storeNames() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }
    return result;
}

function getDifference(firstNum, secondNum) {
    if (firstNum > secondNum) {
        return firstNum - secondNum;
    } else {
        return secondNum - firstNum;
    }
}

function negativeCount(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

function letterCount(name, letter) {
    let count = 0;
    for (let char of name) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}

function countPoints(a){
    let score = 0;
    let str;
    a.forEach(element => {
        str = element.split(':');
        if (str[0] > str[1]){
            score += 3;
        } else if (str[0] === str[1]){
            score += 1
        }
    });
    return score;
}