/* Напиши скрипт, який під час втрати фокусу на інпуті 
(подія blur), перевіряє його вміст щодо правильної кількості 
введених символів.
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Яка кількість символів повинна бути в інпуті, зазначається в 
його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту 
стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, 
які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}
#validation-input.valid {
  border-color: #4caf50;
}
#validation-input.invalid {
  border-color: #f44336;
}
*/
const textInputRef = document.querySelector('input#validation-input');
const textLengthRef = document.querySelector('input[data-length="6"]');
// console.log(textInputRef.classList.value);
textInputRef.addEventListener('blur', checkEnteredData);
// textInputRef.addEventListener('input', addTextInput);

function checkEnteredData(event) {
  console.log('блюр собитие');
  const enteredDataLendth = event.currentTarget.value.length;
  console.log(enteredDataLendth);
  const targetDataLength = Number(textLengthRef.dataset.length);
  console.log(targetDataLength);

  if (enteredDataLendth === targetDataLength && textInputRef.classList.contains('')) {
    return textInputRef.classList.add('valid');
  } else if (enteredDataLendth === targetDataLength && textInputRef.classList.contains('invalid')) {
    return textInputRef.classList.replace('valid');
  } else if (enteredDataLendth !== targetDataLength && textInputRef.classList.contains('valid')) {
      return textInputRef.classList.replace('invalid');
  }
  return textInputRef.classList.replace('invalid');
}
  /*
1. якщо рівні символи 
додаємо валід
перевірка якщо валід, то валід
перевірка якщо інвалід, то валід

2. якщо не рівні символи
додаємо інвалід
перевірка якщо валід, то інвалід
перевірка якщо інвалід, то інвалід і залишаємо


elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

  // if (enteredDataLendth === targetDataLength && textInputRef.classList.value === '') {
  //   return textInputRef.classList.add('valid');
  // } else if (enteredDataLendth !== targetDataLength && textInputRef.classList.value === '') {
  //   return textInputRef.classList.add('invalid');
  // } else if (enteredDataLendth === targetDataLength && textInputRef.classList.value === 'valid') {
  //   return textInputRef.classList.replace('invalid');
  // } else if (enteredDataLendth === targetDataLength && textInputRef.classList.value === 'invalid') {
  //   return textInputRef.classList.replace('valid');
  // }
  // return textInputRef.classList.add('invalid');
}

// повторно не перевіряє, додає два класи і все
