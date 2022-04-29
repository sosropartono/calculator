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

function clear(){
    displaySelector.innerHTML = '';
}


const numSelector = document.querySelectorAll('.num');
const opSelector = document.querySelectorAll('.op');
const clrSelector = document.querySelector('.clr');
const displaySelector = document.querySelector('.display');

//Allows for the display of any number. A number button must be clicked before operand/clear/equate buttons are usable
numSelector.forEach(event => event.addEventListener('click', event => {
    //Adds event target's inner HTML to the display
       displaySelector.innerHTML += event.target.innerHTML;
       let firstNum;
       //collects operand
       let sym = opSelector.forEach(event => event.addEventListener('click', event => {
        firstNum = displaySelector.innerHTML;
           clear();
           return event.target.innerHTML;
       }))



    //    console.log(operate(sym,firstNum,secondNum));

       //collect/listen to the second number and store it






}))

