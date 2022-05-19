function add(a, b) {
    return (+a + +b);
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a*+b;
}

function divide(a, b) {
    if(b == 0){
        return "Please dont break my calculator!";
    }
    return +a / +b;
}


function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "/": return divide(num1, num2);
        case "*": return multiply(num1, num2);

    }

    //if statement operation selection

    // if(operator == "+"){
    //     return add(num1,num2);
    // }
    // if(operator == "-"){
    //     return subtract(num1,num2);
    // }
    // if(operator = "/"){
    //     return divide(num1,num2);
    // }
    // if(operator = "*"){
    //     return multiply(num1,num2);
    // }

}

//Clear function
function clear() {
    displaySelector.innerHTML = '';
}


const numSelector = document.querySelectorAll('.num');
const opSelector = document.querySelectorAll('.op');
const clrSelector = document.querySelector('.clr');
const displaySelector = document.querySelector('.display');
const opDisplaySelector = document.querySelector('.opDisplay');
const equalSelector = document.querySelector('.equal');
const displayOP = document.querySelector('.displayOP');
const backSpaceSelector = document.querySelector('.backspace');
const decimalSelector = document.querySelector('.decimal');

// Algorithm: Receive first input from the clickable buttons/Keyboard
// Get operator input
// Save first number
// Get and save second number
// Operate when operate button is clicked
// Return a string to display

let numberArray = [];
let operatorArray = [];
const decimalReg = /./;


//Receive first input
// forEach method is awlied to add eventListeners to nodelist

// document.addEventListener('keydown', keydown);
backSpaceSelector.addEventListener('click', backspace);
decimalSelector.addEventListener('click', clicking);
numSelector.forEach(number => number.addEventListener('click', clicking));


function backspace(event){
    if(displaySelector.innerHTML.length == 1){
        clearDisplay();
    }
    if(displaySelector.innerHTML != ''){
        let remainder = +displaySelector.innerHTML % 10;
        displaySelector.innerHTML = ((displaySelector.innerHTML-remainder)/10);
    }
    }

// function keydown(event){
//     regEx = "/[0123456789-+]/g";
//     if (operatorArray.length && displaySelector.innerHTML == numberArray[numberArray.length - 1]) {
//         clearDisplay();
//         numberArray.push(0);
//     }
//         displaySelector.innerHTML += event.key;
    
// }

// Click Function
//After clicking on an Operator, the number display will not change until clicking another number, it checks to see if the display is the same as the number pushed, 
//that way it clears it once another number is inputted rather than everytime it is clicked
function clicking(event) {
    if (operatorArray.length && displaySelector.innerHTML == numberArray[numberArray.length - 1]) {
        clearDisplay();
        numberArray.push(0);
    }
    if(decimalReg.test(displaySelector.innerHTML)){
        decimalSelector.removeEventListener('click',clicking);
    }
    displaySelector.innerHTML += event.target.innerHTML;
}


//Operator listener, pushes first number into array
opSelector.forEach(operator => operator.addEventListener('click', event => {
    decimalSelector.addEventListener('click', clicking);
    numberArray.push(displaySelector.innerHTML);

    operator = operatorArray[operatorArray.length - 1];
    firstNumber = numberArray[numberArray.length - 3];
    secondNumber = numberArray[numberArray.length - 1];
    if(numberArray.length > 2 && operatorArray.length >= 1){
        displaySelector.innerHTML = operate(operator, firstNumber, secondNumber);
        numberArray.push(displaySelector.innerHTML);

    }
    operatorArray.push(event.target.innerHTML);
    opDisplaySelector.innerHTML = `${numberArray[numberArray.length - 1]} ${operatorArray[operatorArray.length - 1]}`;
    

}));

//Keyboard listener
// opSelector.forEach(operator => operator.addEventListener('keypress', event => {
//     numberArray.push(displaySelector.innerHTML);
//     operatorArray.push(event.target.innerHTML);
// }))


//firstNumber assigns latest firstNumber, secondNumber assigns number after 0
equalSelector.addEventListener('click', event => {
    numberArray.push(displaySelector.innerHTML);
    operator = operatorArray[operatorArray.length - 1];
    firstNumber = numberArray[numberArray.length - 3];
    secondNumber = numberArray[numberArray.length - 1];
    displaySelector.innerHTML = operate(operator, firstNumber, secondNumber);
    opDisplaySelector.innerHTML = '';
})


// equalSelector.addEventListener('keypress', event => {
//     numberArray.push(displaySelector.innerHTML);
//     operator = operatorArray[operatorArray.length - 1];
//     firstNumber = numberArray[numberArray.length - 3];
//     secondNumber = numberArray[numberArray.length - 1];
//     displaySelector.innerHTML = operate(operator, firstNumber, secondNumber);
// })


//Clear button changes display innerHTML to empty string
clrSelector.addEventListener('click', clearAll);

//Clear both display and arrays function
function clearAll() {
    displaySelector.innerHTML = '';
    opDisplaySelector.innerHTML = '';
    numberArray = [];
    operatorArray = [];
}

//Clear display function
function clearDisplay() {
    displaySelector.innerHTML = '';
}

