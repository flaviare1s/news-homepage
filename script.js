const menuIcon = document.querySelector('#burger-menu');
const closeIcon = document.querySelector('#close-menu');
const nav = document.querySelector('#nav');
const overlay = document.querySelector('#menu-overlay');

menuIcon.addEventListener('click', () => {
  overlay.classList.remove('hidden')
  overlay.classList.add('active')
  nav.classList.add('active')
  menuIcon.classList.add('hidden')
  closeIcon.classList.remove('hidden')
  closeIcon.classList.add('active')
})