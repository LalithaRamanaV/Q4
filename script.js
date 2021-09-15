const input = document.querySelector('#input');
const redButton = document.querySelector('#red');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
const showButtonText = document.querySelector('#show-text');
const output = document.querySelector('#output');

showButtonText.addEventListener('click', () => {
  output.innerText = input.value;
})

redButton.addEventListener('click' , () => {
  output.style.color = "#FF0000";
})

greenButton.addEventListener('click', () => {
  output.style.color = "#00FF00";
})

blueButton.addEventListener('click', () => {
  output.style.color = "#0000FF";
})