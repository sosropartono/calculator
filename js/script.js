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
    numberSelector.innerHTML = '';
}
const buttonSelector = document.querySelectorAll('button.num');
const clrButtonSelector = document.querySelector('.clr');
const numberSelector = document.querySelector('p.input');


clrButtonSelector.addEventListener('click', (event) => clear());



buttonSelector.forEach(item => item.addEventListener('click', (event) => {
    numberSelector.innerHTML += event.target.innerHTML;
    console.log(event.target.innerHTML);
}))