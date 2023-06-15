
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


const input = document.querySelector('#validation-input');

input.addEventListener('blur', lostFocus)


function lostFocus(event) {
if (parseInt(input.dataset.length) === event.currentTarget.value.length){
    input.classList.add('valid');
    input.classList.remove('invalid');
} else {
    input.classList.add('invalid');
    input.classList.remove('valid');
}
}