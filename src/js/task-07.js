// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

input.addEventListener('input', onInputfontRise);
text.style.fontSize = `${input.value}px ` 
function onInputfontRise(){
 text.style.fontSize = `${input.value}px ` 
}

console.log(input.value);
