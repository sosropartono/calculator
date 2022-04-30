function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a - b; 
}

function multiply(a,b){
    return a*b;

}

function divide(a,b){
    return a/b;
}


function operate(operator, num1, num2){
    switch(operator){
        case "+": return add(num1,num2);
        case "-": return subtract(num1,num2);
        case "/": return divide(num1,num2);
        case "*": return subtract(num1,num2);

    }

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
function clear(){
    displaySelector.innerHTML = '';
}


const numSelector = document.querySelectorAll('.num');
const opSelector = document.querySelectorAll('.op');
const clrSelector = document.querySelector('.clr');
const displaySelector = document.querySelector('.display');
const equalSelector = document.querySelector('.equal');

// Algorithm: receive first input from the number/Keyboard
// Get operator input
// Once operator input is selected, remove first eventListener and save second input from number/Keyboard
// equate for the answer, and return a string to display

//Receive first input
// forEach method is applied to add eventListeners to nodelist
const firstNumber = numSelector.forEach(number => number.addEventListener('click', event => {
    //display the first number
    displaySelector.innerHTML +=  event.target.innerHTML;
    return displaySelector.innerHTML
}))



const operator = opSelector.forEach(operator => operator.addEventListener('click', event => {
    return event.target.innerHTML;
}));

equalSelector.addEventListener('click', event => {
    displaySelector.innerHTML = operate(firstNumber,secondNumber, operator);
})

//Clear button changes display innerHTML to empty string
clrSelector.addEventListener('click', event => {
    displaySelector.innerHTML = '';
});

