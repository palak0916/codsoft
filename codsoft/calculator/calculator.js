const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (button.classList.contains('number')) {
      currentInput += buttonValue;
      display.textContent = currentInput;
    }
    
    if (button.classList.contains('operator')) {
      if (operator !== '') {
        calculate();
      }
      previousInput = currentInput;
      currentInput = '';
      operator = buttonValue;
    }
    
    if (button.id === 'equal') {
      calculate();
      operator = '';
    }
    
    if (button.id === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    }
    
    if (button.id === 'delete') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
    }
    
    if (button.classList.contains('decimal')) {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        display.textContent = currentInput;
      }
    }
  });
});

function calculate() {
  let result = 0;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
  }
  
  currentInput = result.toString();
  display.textContent = currentInput;
}
