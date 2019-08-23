'use strict';

const form = document.body.querySelector('#main-form');
const warning = document.body.querySelector('.warning-message');

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.querySelector('#name-field');
  const email = e.target.querySelector('#email-field');
  const phone = e.target.querySelector('#phone-field');

  if (name.value && email.value.includes('@') && phone.value) {
    window.location.href = 'congrats.html';
  } else {
    warning.style.display = 'block';

    if (!name.value) {
      name.classList.add('wrong-data')
    } else {
      name.classList.remove('wrong-data')
    }
    if (!email.value) {
      email.classList.add('wrong-data')
    } else {
      email.classList.remove('wrong-data')
    }
    if (!phone.value) {
      phone.parentElement.classList.add('wrong-data')
    } else {
      phone.parentElement.classList.remove('wrong-data')
    }
  }
}
form.addEventListener('submit', handleSubmit);
