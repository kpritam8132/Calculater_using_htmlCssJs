let displayValue = '';

function appendToDisplay(value) {
  if (value === '.' && displayValue.includes('.')) return; // Allow only one decimal point
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}
