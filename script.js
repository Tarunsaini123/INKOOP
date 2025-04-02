function checkNumber() {
    const inputField = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const value = parseInt(inputField.value, 10);
  
    if (isNaN(value)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
    }
  
    if (value < 0) {
      resultDiv.textContent = "Enter a positive value.";
    } else if (value % 2 === 0) {
      const nextEven1 = value + 2;
      const nextEven2 = value + 4;
      const nextEven3 = value + 6;
      resultDiv.textContent = `Next 3 even numbers: ${nextEven1}, ${nextEven2}, ${nextEven3}`;
    } else {
      const nextOdd1 = value + 2;
      const nextOdd2 = value + 4;
      const nextOdd3 = value + 6;
      resultDiv.textContent = `Next 3 odd numbers: ${nextOdd1}, ${nextOdd2}, ${nextOdd3}`;
    }
  }
  