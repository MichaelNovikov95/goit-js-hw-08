import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');


const dataForm = {};
const savedData = localStorage.getItem('feedback-form-state');


fn3();

function fn1(e) {
  
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function fn2(e) {

  e.preventDefault();

  console.log(JSON.parse(savedData));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function fn3() {

  if (savedData) {

    inputRef.value = JSON.parse(savedData).email;
    textareaRef.value = JSON.parse(savedData).message;
  };
};

formRef.addEventListener('input', throttle(fn1, 500));
formRef.addEventListener('submit', fn2);
