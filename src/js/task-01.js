/* Task1 
Напиши скрипт, який:
Порахує і виведе в консоль кількість категорій в ul#categories, 
тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в 
консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії 
(усіх <li>, вкладених в нього).

В результаті, в консолі будуть виведені наступні повідомлення.
Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5 */

const countEl = document.querySelectorAll('.item');
// console.log(countEl);
console.log('Number of categories: ', countEl.length); // Number of categories: 3

const allEl = document.querySelectorAll('h2');

console.log('Category:', allEl[0].textContent); // Category: Animals
console.log('Elements:', allEl[0].nextElementSibling.children.length); // Elements: 4
console.log('Category:', allEl[1].textContent); // Category: Products
console.log('Elements:', allEl[1].nextElementSibling.children.length); // Elements: 3
console.log('Category:', allEl[2].textContent); // Category: Technologies
console.log('Elements:', allEl[2].nextElementSibling.children.length); // Elements: 5
