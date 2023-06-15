// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const input = document.querySelector('#name-input');
const output = document.querySelector("#name-output");


function inInputText(event) {
    event.preventDefault();
    output.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === ''){
        output.textContent = 'Anonymous';
    }
}
input.addEventListener("input", inInputText);
