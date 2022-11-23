const btn = document.querySelector('.toggleIcon');
const closeX = document.querySelector('#cross-icon');

function mobileMenu() {
  document.getElementById('show').style.display = 'block';
}

function hide() {
  document.getElementById('show').style.display = 'none';
}

btn.addEventListener('click', mobileMenu);
closeX.addEventListener('click', hide);
