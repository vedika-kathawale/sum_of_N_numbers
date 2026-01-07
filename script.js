const generateBtn = document.getElementById("generateBtn");
const calculateBtn = document.getElementById("calculateBtn");
const numCountInput = document.getElementById("numCount");
const numbersContainer = document.getElementById("numbersContainer");
const resultDiv = document.getElementById("result");
const body = document.body;

function numberToWords(num) {
  const ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? "-" + ones[num % 10] : "");
  if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 ? " and " + numberToWords(num % 100) : "");
  return num.toString();
}

generateBtn.addEventListener("click", () => {
  const count = parseInt(numCountInput.value);
  numbersContainer.innerHTML = "";
  resultDiv.innerHTML = "";
  calculateBtn.style.display = "none";

  if (isNaN(count) || count <= 0) {
    resultDiv.innerHTML = "<p class='error'>Please enter a valid positive number.</p>";
    return;
  }

  for (let i = 1; i <= count; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Enter number ${i}`;
    input.className = "number-input";
    numbersContainer.appendChild(input);
  }

  calculateBtn.style.display = "inline-block";
});

calculateBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".number-input");
  let sum = 0;

  for (let i = 0; i < inputs.length; i++) {
    const val = parseFloat(inputs[i].value);
    if (isNaN(val)) {
      resultDiv.innerHTML = `<p class='error'>Invalid input at position ${i + 1}</p>`;
      return;
    }
    sum += val;
  }

  resultDiv.innerHTML = `<p class='success'>Total Sum: <b>${sum}</b></p>`;
});
