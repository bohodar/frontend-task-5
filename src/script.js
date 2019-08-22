'use strict';

const form = document.body.querySelector('#main-form');
function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target[0].id)
}
form.addEventListener('submit', handleSubmit);