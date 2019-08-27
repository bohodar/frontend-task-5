'use strict';

const form = document.body.querySelector('#main-form');
const warning = document.body.querySelector('.warning-message');

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.querySelector('#name-field');
  const email = e.target.querySelector('#email-field');
  const phone = e.target.querySelector('#phone-field');

  const statusOfName = nameVerify(name.value);
  const statusOfEmail = emailVerify(email.value);
  const statusOfPhone = phoneVerify(phone.value);
  console.log(statusOfPhone);

  if (statusOfName && statusOfEmail && statusOfPhone) {
    window.location.href = 'congrats.html';
  } else {
    warning.style.display = 'block';
    name.classList.toggle('wrong-data', !statusOfName);
    email.classList.toggle('wrong-data', !statusOfEmail);
    phone.parentElement.classList.toggle('wrong-data', !statusOfPhone);
  }
}

form.addEventListener('submit', handleSubmit);

function nameVerify(name) {
   return name.search(/[!"#$%&()*+,./:;<=>?@[\\\]_`{|}~\d]/) === -1
}

function emailVerify(email) {
  const indexOfAt = email.indexOf('@');
  const isValidFirstEmailPart = email.slice(0, indexOfAt).search(/[!"#$%&()*+,/:;<=>?@[\\\]`{|}~]/) === -1;
  const isValidLastEmailPart = email.slice(indexOfAt).includes('.');

  return indexOfAt > 0 && isValidFirstEmailPart && isValidLastEmailPart
}

function phoneVerify(phone) {
  return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone)
}
