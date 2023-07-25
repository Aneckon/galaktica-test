const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
  if (burger.classList.contains('burger--active')) {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
  burger.classList.toggle('burger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('mobile-menu--active');
    document.body.style.overflow = '';
  });
});
