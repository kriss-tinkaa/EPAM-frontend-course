function reverseNumber(num) {
    return String(num).split('').reverse().join('');
}

function forEach(arr, func) {
    for(let i = 0; i <= arr.length; i++){
        func(arr[i]);
    }
}

function map(arr, func) {
    for(let i = 0; i <= arr.length; i++){
        func(arr[i] + 3);
    }
}