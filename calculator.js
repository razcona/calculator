let firstNum;
let secondNum;
let operator; 
let display = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;

function operate() {
    return operator === '+' ? add(firstNum, secondNum) 
    : operator === '-' ? subtract(firstNum, secondNum) 
    : operator === '*' ? multiply(firstNum, secondNum) 
    : operator === '/' ? divide(firstNum, secondNum) 
    : modulo(firstNum, secondNum);
}

const output = document.querySelector("#display");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".right");
numbers.addEventListener("click", (e) => {
    display += e.target.value;
    output.innerHTML = display;
});

operators.addEventListener("click", (e) => {
    if(e.target.id === "clear") {
        display = "";
        output.innerHTML = "0";

    }
})
