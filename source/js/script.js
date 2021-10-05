'use strict';

//меню tablet и mobile
const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});

//переключение карточек стран
const countryLinks = document.querySelectorAll('.country__link');
const countryCards = document.querySelectorAll('.country__tabs-item');
const countryIcons = document.querySelectorAll('.location__link')

countryCards.forEach((card) => {
  card.classList.add('country__tabs-item--hidden');
});
countryLinks[0].classList.add('country__link--active');
countryCards[0].classList.remove('country__tabs-item--hidden');

const changeCards = (index) => {
  countryLinks.forEach((button) => {
    button.classList.remove('country__link--active');
  });
  countryCards.forEach((card) => {
    card.classList.add('country__tabs-item--hidden');
  });

  countryLinks[index].classList.add('country__link--active');
  countryCards[index].classList.remove('country__tabs-item--hidden');
};

countryLinks.forEach((element, index) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    changeCards(index);
  });
});

countryIcons.forEach((element, index) => {
  element.addEventListener('click', () => {
    changeCards(index);
  });
});

//модальное окно
const modal = document.querySelector('.modal');
const modalSuccess = modal.querySelector('.modal__success');
const modalInputTel = modal.querySelector('.modal__input--tel');
const modalClose = modal.querySelector('.modal__close');
const buttonBuyNow = document.querySelector('.button--buy-now');

buttonBuyNow.onclick = () => {
  modal.classList.remove('modal--show');
  modalSuccess.classList.remove('modal__success--show');
}

//закрыть модальное окно
modalClose.onclick = () => {
  modal.classList.remove('modal--show');
  modalSuccess.classList.remove('modal__success--show');
}
