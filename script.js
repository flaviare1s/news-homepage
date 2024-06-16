const menuIcon = document.querySelector('#burger-menu');
const closeIcon = document.querySelector('#close-menu');
const nav = document.querySelector('#nav');
const overlay = document.querySelector('#menu-overlay');

function openMenu() {
  overlay.classList.remove('hidden')
  overlay.classList.add('active')
  nav.classList.add('active')
  menuIcon.classList.add('hidden')
  closeIcon.classList.remove('hidden')
  closeIcon.classList.add('active')
}

function closeMenu() {
  overlay.classList.remove('active')
  overlay.classList.add('hidden')
  nav.classList.remove('active')
  menuIcon.classList.remove('hidden')
  menuIcon.classList.add('active')
  closeIcon.classList.remove('active')
  closeIcon.classList.add('hidden')
}

menuIcon.addEventListener('click', openMenu)
closeIcon.addEventListener('click', closeMenu)
