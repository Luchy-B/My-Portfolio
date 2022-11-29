const btn = document.querySelector('.toggleIcon');
const closeX = document.querySelector('#cross-icon');

function mobileMenu() {
  document.getElementById('show').style.display = 'block';
  document.body.style.overflowY = 'hidden';
}

function hide() {
  document.getElementById('show').style.display = 'none';
  document.body.style.overflowY = 'scroll';
}

btn.addEventListener('click', mobileMenu);
closeX.addEventListener('click', hide);

// form Validation
const userEmail = document.querySelector('#email');
const alertMsg = document.querySelector('.alert-Msg');
const contactForm = document.querySelector('.contactForm');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = userEmail.value;
  if (regex.test(emailContent)) {
    alertMsg.innerHTML = 'Your email address should be lower case';
    event.preventDefault();
  }
});


