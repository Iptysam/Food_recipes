const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menubtn');
const navlinks = document.querySelectorAll('.nav-links');
const closeBtn = document.querySelector('.close_btn');

function open() {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
  }
  
hamburger.addEventListener('click', open);
closeBtn.addEventListener('click', open);
navlinks.forEach((link) => {
  link.addEventListener('click', open);
});
