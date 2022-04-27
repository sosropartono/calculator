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

const buttonSelector = document.querySelector('button');
buttonSelector.addEventListener('click', (event) => {
    const displayValue = document.createElement('p');
    console.log('button clicked!');
})