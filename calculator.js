let firstNum = null;
let secondNum = null;
let operator = null; 
let display = "";
let currentResult = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;
const power = (a, b) => {
    let result = 1;
    if (b === 0) {
        return result;
    }

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}


function operate() {
    return operator === '+' ? add(firstNum, secondNum) 
    : operator === '-' ? subtract(firstNum, secondNum) 
    : operator === '*' ? multiply(firstNum, secondNum) 
    : operator === '/' ? divide(firstNum, secondNum) 
    : modulo(firstNum, secondNum);
}

const output = document.querySelector("#display");
const numbers = document.querySelector(".numbers");
const basicOperators = document.querySelector(".right");
const altOperators = document.querySelector(".top");

numbers.addEventListener("click", (e) => {
    if (display.length < 11 && e.target.id != "equals") {
        display += e.target.value;
        output.innerHTML = display;
    }

    else if (e.target.id === "equals" && firstNum != null && operator != null) {
        if (currentResult != null) {
            firstNum = currentResult;
        }
        secondNum = Number(display);
        currentResult = operate();
        display = currentResult.toString();
        output.innerHTML = display;
        firstNum = null;
        secondNum = null;
        operator = null;
        currentResult = null;

    }

});

basicOperators.addEventListener("click", (e) => {
    
        let operatorId = () => {
            return e.target.id === "clear" ? 'AC' 
            :e.target.id === "plus" ? '+' 
            : e.target.id === "minus" ? '-'
            : e.target.id === "multiply" ? '*'
            : '/';
        } 
    if(operatorId() === "AC") {
        display = "";
        firstNum = null;
        secondNum = null;
        currentResult = null;
        operator = null;
        output.innerHTML = "0";
    }

    else  {
        if(operator === null) {
            operator = operatorId();
        }
        if (currentResult != null) {
            firstNum = currentResult;
        }
        if (firstNum === null) {
            firstNum = Number(display);
        } else if (secondNum === null){ 
            secondNum = Number(display);
            currentResult = operate();
            operator = operatorId();
            display = currentResult.toString();
            output.innerHTML = display;
        } else {
            firstNum = currentResult;
            secondNum = Number(display);
            currentResult = operate();
            operator = operatorId();
            display = currentResult.toString();
            output.innerHTML = display;
        }

        display = "";
        
    }


});

altOperators.addEventListener("click", (e) => {
    //create the event alternate operators event listeners
    //When squared is clicked it squares the current value on display
    //When exponent is clicked and takes the firstNum and multiplies it by secondNum times
});   
