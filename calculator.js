let firstNum;
let secondNum;
let operator; 
let display = '0';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate() {
    return operator === '+' ? add(firstNum, secondNum) 
    : operator === '-' ? subtract(firstNum, secondNum) 
    : operator === '*' ? multiply(firstNum, secondNum) 
    : divide(firstNum, secondNum);
}



