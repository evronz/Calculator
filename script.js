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

function evaluate(operator, op1, op2){
  let result;
  
  switch(operator){
    case '+':
      result = add(op1, op2);
      break;
    case '-':
      result = subtract(op1, op2);
      break;
    case '*':
      result = multiply(op1, op2);
      break;
    case '/':
      result = divide(op1, op2);
      break;
  }

  return result;
}

let num1 = prompt("Enter first operand.");
let num2 = prompt("Enter second operand.");
let operator = prompt("Enter the operator.");

alert(`${num1} ${operator} ${num2} = ${evaluate(operator, num1, num2)}`);