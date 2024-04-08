let firstNum = null;
let secondNum = null;
let operator = null; 
let display = "";
let containsDecimal = false;
let currentResult = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b != 0 ?  a / b : 'Nice Try!';
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
    let result = operator === '+' ? add(firstNum, secondNum) 
    : operator === '-' ? subtract(firstNum, secondNum) 
    : operator === '*' ? multiply(firstNum, secondNum) 
    : operator === '/' ? divide(firstNum, secondNum) 
    : operator === 'x^y' ? power(firstNum, secondNum)
    : operator === 'x^2' ? power(firstNum, 2)
    : modulo(firstNum, secondNum);

    if (result > 99999999999) {
        return result.toExponential(4);
    }

    return result;
        
}

const output = document.querySelector("#display");
const numbers = document.querySelector(".numbers");
const basicOperators = document.querySelector(".right");
const altOperators = document.querySelector(".top");

numbers.addEventListener("click", (e) => {
    if (display.length < 11 && e.target.id != "equals") {
        if(!containsDecimal && e.target.id === "decimal") {
            display = !display ? '0' : display;
            display += e.target.value;
            output.innerHTML = display;
            containsDecimal = true;
        }
        else if(e.target.id != "decimal"){
            display += e.target.value;
            output.innerHTML = display;
        }
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
        containsDecimal = false;

    }

});

basicOperators.addEventListener("click", (e) => {
    containsDecimal = false;
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

    let operatorId = () => {
        return e.target.id === "squared" ? 'x^2' 
        :e.target.id === "exponent" ? 'x^y' 
        : '%';
    }

    if(operatorId() === 'x^2' && currentResult === null) {
        if (firstNum != null) {
            secondNum = Number(display);
            currentResult = operate();
            display = currentResult.toString();
        }
        firstNum = Number(display);
        operator = operatorId();
        currentResult = operate();
        display = currentResult.toString();
        output.innerHTML = display;
        operator = null;
        firstNum = null;
        secondNum = null;
        currentResult = null;
    }

    else if(operatorId() === 'x^2' && currentResult != null) {
        firstNum = currentResult;
        secondNum = Number(display);
        currentResult = operate();
        operator = operatorId();
        firstNum = currentResult;
        currentResult = operate();
        display = currentResult.toString();
        output.innerHTML = display;
        operator = null;
        firstNum = null;
        secondNum = null;
        currentResult = null;
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
        containsDecimal = false;
        
    }

});   
