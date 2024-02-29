
const navbar = document.querySelector('.navbar');
const mainSection = document.querySelector('.main-section');

window.addEventListener('scroll', () => {
  if (window.scrollY > mainSection.offsetTop - navbar.clientHeight) {
    navbar.classList.add('opaque');
  } else {
    navbar.classList.remove('opaque');
  }
});

const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

