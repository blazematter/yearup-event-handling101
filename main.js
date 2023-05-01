console.log("IS MY JAVASCRIPT LOADING SWAG SWAG SWAG");

// The "document" object is th DOM (Document Object Model)
/// The "DOM" is another way of calling the "HTML tree structure"
//code runner only used for js files that are not connected to html file
let calculatorForm = document.getElementById("calculator-form");
//console.dir(loginForm);

let inputP = document.getElementById("value-p");
let inputT = document.getElementById("value-t");
let inputR = document.getElementById("value-r");
let inputN = document.getElementById("value-n");
let resultElement = document.getElementById("result");
//console.log(emailInput);

//let loginButton = document.getElementById("login-button");
//console.log(loginForm.innerHTML);
//loginForm.innerHTML = "<h3> fuckk it </h3>"

function onCalculate(event) {
  //do this for every form
  event.preventDefault();
  //console.log(inputX.value);
  //console.log(inputY.value);

  //let sum = Number(inputP.value)+ Number(inputT.value)+Number(inputR.value)+Number(inputN.value)
  let amount = Number(inputP.value) * (Math.pow((1 + (Number(inputR.value) / Number(inputN.value))), (Number(inputN.value) * Number(inputT.value))));
  let interest = amount - Number(inputP.value);
// took formula from https://www.tutorialspoint.com/calculate-compound-interest-in-javascript

  //console.log(sum);
  //console.log(resultElement)
  //console.log(resultElement.innerHTML)
  //resultElement.innerHTML = sum

  //esultElement.innerHTML = Number(inputX.value) + Number(inputY.value);
  //console.log(event);
  //console.log(2 + 34);
  resultElement.innerHTML = "<h4>" + "$" + interest.toFixed(2) +" is the compund interest rate"+ "</h4>";
}

calculatorForm.onsubmit = onCalculate;

//loginButton.onclick = onLogin

//loginButton.onkeypress = onLogin
