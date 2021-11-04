'use strict';

//меню tablet и mobile
const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');
const callbackForm = document.querySelector('.callback__form');
const callbackEmailInput = document.querySelector('#callback-email');
const callbackTelInput = document.querySelector('#callback-tel');
const callbackButton = callbackForm.querySelector('.callback__button')
const countryLinks = document.querySelectorAll('.country__link');
const countryCards = document.querySelectorAll('.country__tabs-item');
const countryIcons = document.querySelectorAll('.location__link')
const buttonBuyNow = document.querySelector('.button--buy-now');
const modal = document.querySelector('.modal');
const modalSuccess = modal.querySelector('.modal__success');
const modalInputTel = modal.querySelector('.modal__input--tel');
const modalClose = modal.querySelector('.modal__close');


pageHeader.classList.remove('page-header--nojs');

//открытие и закрытие мобильного меню
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

//открытие модального окна
const popupShow = function (evt) {
  if (evt.target.classList.contains("button--buy-now")) {
    modal.classList.add("modal--show");
    document.body.classList.add("overflow-hidden");
  }
};

//закрытие модального окна
const popupClose = function () {
  modal.classList.remove("modal--show");
  document.querySelector("body").classList.remove("overflow-hidden");
};

modalClose.addEventListener("click", popupClose);
document.addEventListener("click", popupShow);

//Валидация полей формы обратной связи
if (callbackEmailInput && callbackTelInput) {
  callbackEmailInput.addEventListener('input', function () {
    if (callbackEmailInput.validity.patternMismatch) {
      callbackEmailInput.setCustomValidity('Вводите только латинские буквы');
    } else {
      callbackEmailInput.setCustomValidity('');
    }
  });

  callbackTelInput.addEventListener('input', function () {
    if (callbackTelInput.validity.patternMismatch) {
      callbackTelInput.setCustomValidity('Введите телефон в формате +7 ХХХ ХХХ ХХ ХХ');
    } else {
      callbackTelInput.setCustomValidity('');
    }
  });

  callbackButton.addEventListener('click', function () {
    localStorage.setItem(callbackEmailInput.name, callbackEmailInput.value);
    localStorage.setItem(callbackTelInput.name, callbackTelInput.value);
  });
}
