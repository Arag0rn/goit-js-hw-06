// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const liQuant = document.querySelectorAll(".item")
console.log("Number of categories:", liQuant.length);

liQuant.forEach( val => console.log("Category:", val.children[0].textContent ))
liQuant.forEach( val => console.log("Elements:", val.children[1].children.length)) 