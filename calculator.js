// creating variables for the calculator functionality
const output = document.getElementById('display-number');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const numbers = document.getElementsByClassName('btn-number');
const operators = document.getElementsByClassName('btn-operator');

var currentDisplayVal = '0';
var pendingDisplayVal;
var calculateVal = [];

// function appends the value of the clicked button to the current display value-0
updateCurrentDisplayVal = (e) => {
    var numbersVal = e.target.innerText;
    if(currentDisplayVal === '0') {
        currentDisplayVal = "";
    }
    currentDisplayVal += numbersVal;
    output.innerText = currentDisplayVal;
}

performOperation = (e) => {
    var operator = e.target.innerText;

    switch (operator) {
        case '+': pendingDisplayVal = currentDisplayVal;
        currentDisplayVal = '0';
        output.innerText = currentDisplayVal;
        calculateVal.push(pendingDisplayVal);
        calculateVal.push('+');
        break;

        case '-': pendingDisplayVal = currentDisplayVal;
        currentDisplayVal = '0';
        output.innerText = currentDisplayVal;
        calculateVal.push(pendingDisplayVal);
        calculateVal.push('-');
        break;

        case '*': pendingDisplayVal = currentDisplayVal;
        currentDisplayVal = '0';
        output.innerText = currentDisplayVal;
        calculateVal.push(pendingDisplayVal);
        calculateVal.push('*');
        break;

        case '/': pendingDisplayVal = currentDisplayVal;
        currentDisplayVal = '0';
        output.innerText = currentDisplayVal;
        calculateVal.push(pendingDisplayVal);
        calculateVal.push('/');
        break;

        case '%': pendingDisplayVal = currentDisplayVal;
        currentDisplayVal = '0';
        output.innerText = currentDisplayVal;
        calculateVal.push(pendingDisplayVal);
        calculateVal.push('%');
        break;

        case '=': calculateVal.push(currentDisplayVal);
        var calculate = eval(calculateVal.join(''));
        currentDisplayVal = calculate + '';
        output.innerText = currentDisplayVal;
        calculateVal = [];
        // to clear the array
        break;
        default: break;
    }
}


for (let i=0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', updateCurrentDisplayVal);    
}

for (let i=0; i < operators.length; i++) {
    operators[i].addEventListener('click', performOperation);
}

// clear button function
clear.onclick = () => {
    currentDisplayVal = '0';
    pendingDisplayVal = undefined;
    calculateVal = [];
    output.innerText = currentDisplayVal;
}

// decimal function
decimal.onclick = () => {
    if(!currentDisplayVal.includes('.')) {
        currentDisplayVal += '.';
    }
    output.innerText = currentDisplayVal;
}