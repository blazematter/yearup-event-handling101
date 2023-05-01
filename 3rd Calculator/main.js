let calculatorForm = document.getElementById("calculator-form");
let inputL = document.getElementById("value-L");
let inputW = document.getElementById("value-w");
let resultElement = document.getElementById("result");


function onCalculate(event) {
    event.preventDefault();


let sum = Number(inputL.value) * Number(inputW.value);

resultElement.innerHTML = sum + " is the area of the given rectangle."
}

calculatorForm.onsubmit = onCalculate;