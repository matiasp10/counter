const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const counter = document.querySelector('.counter');

let value = 0;

decrease.addEventListener('click', () => {
  value--;
  counter.textContent = value;
});

increase.addEventListener('click', () => {
  value++;
  counter.textContent = value;
});

reset.addEventListener('click', () => {
  value = 0;
  counter.textContent = value;
});
