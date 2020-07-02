// let add_result = input1 + input2;

function add(a, b) {

    return a + b;
}
function divide(a, b) {

    return a / b;
}
function multiply(a, b) {

    return a * b;
}

function calculator(a, b, callback) {
    return callback(a, b);
}

//Tests calculator
console.log(calculator(21, 7, add));
console.log(calculator(21, 7, multiply));
console.log(calculator(21, 7, divide));


function addCalculatorEvent(targetElement, callback) {
    
    targetElement.addEventListener('click', function () {

        //get the inputs from input elements
        let inputNum1 = Number(input1.value);
        let inputNum2 = Number(input2.value);

        // put this value into calculator function
        let result = calculator(inputNum1, inputNum2, callback);
        output_Element.innerHTML = "";
        output_Element.append("Result is:  " + result);
    })
}


addCalculatorEvent(button_add, add);
addCalculatorEvent(button_mult, multiply);
addCalculatorEvent(button_divide, divide);

