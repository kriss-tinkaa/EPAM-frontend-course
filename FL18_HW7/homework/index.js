/* eslint-disable no-octal */
/* eslint-disable no-magic-numbers */
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
];

//1
function getAge(date) {
    return new Date().getFullYear() - date.getFullYear();
}

//2
function getWeekDay(date) {
    return weekday[date.getDay()];
}

//3
function getAmountDaysToNewYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
}

//4

function getProgrammersDay(year) {
    var day;

    function isLeapYear(year) {
        return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0
    }
    if (isLeapYear(year)) {
        // eslint-disable-next-line no-magic-numbers
        day = new Date(year, 08, 12);
    } else {
        day = new Date(year, 08, 13);
    }
    const result = `${day.getDate()} ${months[day.getMonth()]}, ${day.getFullYear()}  (${getWeekDay(day)})`;
    return result;
}

//6
function isValidIdentifier(str) {
    const regex = /[\w$]+$/;
    const digits = /[0-9]/;
    if (!digits.test(str[0]) && regex.test(str)) {
        return true;
    } else {
        return false;
    }
}

//7
function capitalize(str) {
    return str.replace(/\b[a-z](?=[a-z]{2})/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });
}

//8
function isValidAudioFile(fileName) {
    const nameTest = /^[a-zA-Z]+$/;
    const extentionTest = /\.(mp3|flac|alac|arc)$/;
    const name = fileName.split('.')[0];
    const ext = '.' + fileName.split('.')[1];
    if (nameTest.test(name) && extentionTest.test(ext)) {
        return true;
    } else {
        return false;
    }
}

//9
function getHexadecimalColors(str) {
    const regexp = /#[A-Fa-f0-9]{3}\b|[A-Fa-f0-9]{6}\b/gi;
    return str.match(regexp) || [];
}