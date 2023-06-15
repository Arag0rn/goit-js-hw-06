const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingrList = document.querySelector("ul")

const listItems = ingredients.map(ingrid => {
const list = document.createElement("li")
list.className = "item"
list.textContent = ingrid

return list ;
})

listItems.forEach(item => {
  ingrList.append(item);
});