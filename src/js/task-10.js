const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')


console.log(input.value);
buttonCreate.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});
buttonDestroy.addEventListener('click', onClickDestroy)


function onClickDestroy(){
  boxes.innerHTML = '';
}

function createBoxes(amount){
  for (let i = 0; i < amount; i++){
  const size = 30 + i * 10;
  const color = getRandomHexColor();
  const box = document.createElement('div');
  box.style.backgroundColor = color
  box.style.width = `${size}px`
  box.style.height = `${size}px`
  boxes.append(box)
}
console.dir(input.value)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
