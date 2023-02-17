/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обробка відправлення форми form.login-form повинна відбуватися 
відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про
 те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери 
значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
а значення поля - значенням властивості. Для доступу до елементів
 форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення 
полів форми методом reset.

*/

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

function onFormInput(eventInp) {
  // if (eventInp.currentTarget.value) {
  //   const formData = new FormData(eventInp.currentTarget);
  //   console.log(formData); // will not see results

  //   formData.forEach((value, name) => {
  //     console.log(value, name);
  //   }); // to see results
  // }
  alert('you did not add data')=!eventInp.currentTarget.value;
  console.log('you did not add data');
}
function onFormClean (event) {
  form.classList.remove('.input')
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData); // will not see results

  formData.forEach((value, name) => {
    console.log(value, name);
  }); // to see results

  // alert(`please write email`);

  // ------------ by hand variant

  // const elementsOfForm = event.currentTarget.elements;
  // console.dir(elementsOfForm);

  // const mail = elementsOfForm.email.value;
  // const password = elementsOfForm.password.value;

  // const formData = {
  //   mail,
  //   password,
  // };
  // console.log(formData);
}
