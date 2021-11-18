$(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('fixed');
      $(`.header__body`).addClass('sticky');
    } else {
      $('.header').removeClass('fixed');
      $(`.header__body`).removeClass('sticky');
    }
  });

  $('.menu-btn').on('click', function () {
    $('.menu__list, .menu-btn').toggleClass('active');
  });


  $('.card').on('click', function () {
    $('.card').addClass('click-card');
  });

  $('.card__btn').on('click', function () {
    $('.card__btn').addClass('click-btn');
  });


  $(".menu a").on("click", function (e) {
    e.preventDefault();

    let id = $(this).attr('href'),

    top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });

  //спойлер
  $('.description').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $('.services__btn').click(function (event) {
    $('.services__item').removeClass('hidden');
  });

});

//кнопка input
inp = document.querySelector('.contact__text');
btn = document.querySelector('.contact__btn');
btn.setAttribute('disabled', true);
inp.oninput = function () {
  if (inp.value.length < 1) {
    btn.setAttribute('disabled', true);
  } else {
    btn.removeAttribute('disabled');
  } 
}

//карточки
const cards = document.querySelectorAll('.card');
cards.forEach(cardEl => {
  const buttonEl = cardEl.querySelector('.card-btn');
  let isActive = false;
  buttonEl.addEventListener('click', () => {
    
    isActive = !isActive;
    cardEl.classList[isActive ? 'remove' : 'add']('.card__color-default');
    cardEl.classList[isActive ? 'add' : 'remove']('.click-card');
  });
});

//открыть все карточки
const servicesItem = document.querySelectorAll('.services__item');
const servicesButton = document.querySelector('.services__btn');
let isActive = false;

  servicesButton.addEventListener('click', () => {

    isActive = !isActive;
    servicesItem.classList[isActive ? 'remove' : 'add']('hidden');
    cardEl.classList[isActive ? 'add' : 'remove']('hidden');
  });

  

  
  
