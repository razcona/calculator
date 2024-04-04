let firstNum = 0;
let secondNum = 0;
let operator = null; 
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
    if (display.length < 11 && e.target.id != "equals") {
        display += e.target.value;
        output.innerHTML = display;
    }

    else if (e.target.id === "equals" && firstNum != 0 && operator != null) {
        secondNum = Number(display);
        display = operate().toString();
        output.innerHTML = display;
        console.log(firstNum);
        console.log(secondNum);
        console.log(operator);
        console.log(display);
    }

});

operators.addEventListener("click", (e) => {
    if(e.target.id === "clear") {
        display = "";
        firstNum = 0;
        secondNum = 0;
        operator = null;
        output.innerHTML = "0";
    }

    else if (e.target.id === "plus") {
        operator = '+';
        if (firstNum === 0) {
            firstNum = Number(display);
        } else { 
            secondNum = Number(display);
        }
        display = "";
        
    }

})
