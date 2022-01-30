'use strict'
let saveBtn = document.querySelector('.save');
let loadBtn = document.querySelector('.load');
let textInput = document.querySelector('.text-input');

function saveData(data) {
  localStorage.setItem(data.name, data.value);
}

function getData(data) {
  if(data.value === '') {
    data.value = localStorage.getItem(data.name);
  }
}

saveBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let checkedBtn = document.querySelector('input[name="radio"]:checked');

  getData(textInput);
  getData(checkedBtn);
  saveData(textInput);
  saveData(checkedBtn);
});

loadBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let storageText = localStorage.getItem('text');
  let storageRadio = localStorage.getItem('radio');
  if(storageText) {
    textInput.value = storageText;
  }
  if(storageRadio) {
    let active = document.querySelector(`input[value=${storageRadio}]`);
    active.checked = true;
  }
});
