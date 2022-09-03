const DEFAULT_RESULT_VALUE = 0;

let solution;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear-btn');
const deleteBtn = document.getElementById('delete-btn');
const evaluateBtn = document.getElementById('evaluate');
const inputDisplay = document.getElementById('input-display');
const resultDisplay = document.getElementById('result-display');

clearBtn.onclick = () => clearDisplay();
deleteBtn.onclick = () => deleteLastInput();
buttons.forEach(button => displayInput(button));
evaluateBtn.onclick = () => evaluateExpression();


function clearDisplay() {
  inputDisplay.textContent = "";
  resultDisplay.textContent = DEFAULT_RESULT_VALUE;
}

function deleteLastInput(){
  if(inputDisplay.textContent === ''){
    return;
  } else if(isLastInputEvaluate()) {
    return;
  } else {
    if(isLastInputOperator()){
      inputDisplay.textContent = inputDisplay.textContent.slice(0, -3);
    } else {
      inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    }
  }
}

function displayInput(button){
  button.onclick = (e) => {
    if(e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/') {
      if(inputDisplay.textContent === ''){
        return;
      } else if(isLastInputEvaluate()) {
        return;
      } else if(isLastInputOperator()) {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -3) + ' ' + e.target.textContent + ' ';
      } else {
        inputDisplay.textContent += ' ' + e.target.textContent + ' ';
      }
    } else if(isLastInputEvaluate()) {
      return;
    } else {
        inputDisplay.textContent += e.target.textContent;
    }
  }
}

function isLastInputOperator(){

  if(inputDisplay.textContent === ''){
    return false;
  }

  const lastElement = inputDisplay.innerText.split(' ').pop();

  if(lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '/') {
    return true;
  } else {
    return false;
  }
}

function isLastInputEvaluate(){

  if(inputDisplay.textContent === ''){
    return false;
  }

  const lastElement = inputDisplay.innerText.split(' ').pop();

  if(lastElement === '=') {
    return true;
  } else {
    return false;
  }
}

function evaluateExpression(){
  if(inputDisplay.textContent === ''){
    return;
  } else if(isLastInputEvaluate()) {
    return;
  }else if(isLastInputOperator()) {
    return;
  } else {
    let expression = inputDisplay.innerText.split(' ');
    inputDisplay.textContent += ' =';

    let operators = expression.filter((inputElement) => {
      if(inputElement === '+' || inputElement === '-' || inputElement === '*' || inputElement === '/') {
        return true;
      } else {
        return false;
      }
    });
    
    let operands = expression.filter((inputElement) => {
      if(inputElement === '+' || inputElement === '-' || inputElement === '*' || inputElement === '/') {
        return false;
      } else {
        return true;
      }
    });

    let operator, operand1, operand2;

    while(operators.length != 0){
      operator = operators.shift();
      operand1 = operands.shift();
      operand2 = operands.shift();

      solution = evaluate(operator, operand1, operand2);

      operands.unshift(solution);
    }

    solution = Math.round(solution * 1000) / 1000;

    resultDisplay.textContent = solution;
  }
}

function evaluate(operator, op1, op2){
  let a = Number(op1);
  let b = Number(op2);
  let calculatedValue;
  
  switch(operator){
    case '+':
      calculatedValue = add(a, b);
      break;
    case '-':
      calculatedValue = subtract(a, b);
      break;
    case '*':
      calculatedValue = multiply(a, b);
      break;
    case '/':
      calculatedValue = divide(a, b);
      break;
  }

  return calculatedValue;
}