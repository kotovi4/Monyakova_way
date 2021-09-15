'use strict';
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

let tabs = function (target) {
  let elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
    eventTabsShow,
    showTab = function (tabsLinkTarget) {
      let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = document.querySelector('.country__link--active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.country__tabs-item--active');
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('country__link--active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('country__tabs-item--active');
      }
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add('country__link--active');
      tabsPaneTarget.classList.add('country__tabs-item--active');
      document.dispatchEvent(eventTabsShow);
    },

    switchTabTo = function (tabsLinkIndex) {
      let tabsLinks = elemTabs.querySelectorAll('.country__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  eventTabsShow = new CustomEvent('tab.show', {
    detail: elemTabs
  });

  elemTabs.addEventListener('click', function (e) {
    let target = e.target.closest('.country__link');
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!target) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    showTab(target);
  });

  return {
    showTabs: function (target) {
      showTab(target);
    },
    switchTabsTo: function (index) {
      switchTabTo(index);
    }
  }
};

tabs('.country__wrapper');
