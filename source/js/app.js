//Открытие и закрытие меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//Открытие и закрытие модального окна
var link = document.querySelector('.promo__order');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add('modal--show');
  overlay.classList.add('modal__overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal--show')) {
        popup.classList.remove('modal--show');
        overlay.classList.remove('modal__overlay--show');
      }
  }
});

overlay.addEventListener('click', function(event) {
  if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
      overlay.classList.remove('modal__overlay--show');
  }
});
