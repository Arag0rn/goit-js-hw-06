const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanCol = document.querySelector('.color');


console.dir(body.style.backgroundColor);

button.addEventListener('click', onClickBodyChanger);

function onClickBodyChanger(){
  body.style.backgroundColor = getRandomHexColor() 
  spanCol.textContent = ` ${getRandomHexColor()}`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor);