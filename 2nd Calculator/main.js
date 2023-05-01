let calculatorForm = document.getElementById("calculator-form");
let inputF = document.getElementById("value-f");
let resultElement = document.getElementById("result");


function onCalculate(event) {
    event.preventDefault();


let sum = (Number(inputF.value)-32) / 1.8;

resultElement.innerHTML = sum.toFixed(2) + " is the converted degrees in Celcius."
}

calculatorForm.onsubmit = onCalculate;