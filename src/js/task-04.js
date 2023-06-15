const decrButton = document.querySelector('[data-action="decrement"]');
console.log(decrButton)
const incrButton = document.querySelector('[data-action="increment"]');
let value = document.querySelector('#value');
console.log(value.textContent);

let counterValue = 0;

decrButton.addEventListener('click', () => {
    counterValue -= 1; 
    value.textContent = counterValue
});

incrButton.addEventListener('click', () => {
    counterValue += 1; 
    value.textContent = counterValue
});

