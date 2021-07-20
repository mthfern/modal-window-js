'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

const toggleHiddenClass = elem => {
  elem.classList.toggle('hidden');
};

const toggleModalWindow = e => {
  [modal, overlay].forEach(toggleHiddenClass);
};

const addClickEvent = (elem, callback) => {
  elem.addEventListener('click', callback);
};

[...openModalBtns, closeModalBtn, overlay].forEach(el => {
  addClickEvent(el, toggleModalWindow);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModalWindow();
  }
});
