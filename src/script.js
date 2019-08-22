'use strict';

const form = document.body.querySelector('#main-form');
function handleSubmit(e) {
  e.preventDefault();
  const nameValue = e.target.querySelector('#name-field').value;
  const emailValue = e.target.querySelector('#email-field').value;
  const phoneValue = e.target.querySelector('#phone-field').value;
  if (nameValue && emailValue.includes('@') && phoneValue) {
    window.location.href = 'congrats.html';
  } else {
    console.log('So sad :(')
  }
}
form.addEventListener('submit', handleSubmit);
