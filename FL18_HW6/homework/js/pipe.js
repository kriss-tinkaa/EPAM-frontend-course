/* eslint-disable no-mixed-spaces-and-tabs */
const pipe = (value, ...funcs) => {

    let newValue = value;
    for (let i = 0; i < funcs.length; i++) {
        if (typeof funcs[i] === 'function') {
            newValue = funcs[i](newValue);
        } else {
            return `Provided argument at position ${i} is not a function!`
        }
    }
    return newValue;
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
    value
    .split(' ')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

//alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!