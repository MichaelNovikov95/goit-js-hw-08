import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');


fn3();


function fn1(e) {
  const { name, value } = e.target;

  let savedOutData = localStorage.getItem('feedback-form-state');
  savedOutData = savedOutData ? JSON.parse(savedOutData) : {};

  savedOutData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(savedOutData));
}


function fn2(e) {
  e.preventDefault();

  const savedInData = localStorage.getItem('feedback-form-state');

  if (inputRef.value && textareaRef.value) {
    console.log(JSON.parse(savedInData));
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
  } else {
    return;
  }
}


function fn3() {
  let savedOutData = localStorage.getItem('feedback-form-state');

  if (savedOutData) {
    JSON.parse(savedOutData).email === undefined
      ? ''
      : (inputRef.value = JSON.parse(savedOutData).email);
    JSON.parse(savedOutData).message === undefined
      ? ''
      : (textareaRef.value = JSON.parse(savedOutData).message);
  }
}


formRef.addEventListener('input', throttle(fn1, 500));
formRef.addEventListener('submit', fn2);
