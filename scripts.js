//Mobile Menu
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

// Form validation

const userEmail= document.querySelector('#email');
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

// Modal
const closeNav = document.getElementById('cross-icon');
const body = document.getElementById('body');
const cardBtn = document.getElementById('allSeeBtn');
const modal = document.getElementById('myModal');
const title = document.getElementById('modal-title');
const image = document.getElementById('imgModal');
const modeP= document.getElementById('modalPara');
const seeLive = document.getElementById('seeLive');
const seeSource = document.getElementById('seeSource');

const cards = [
  {
    pTitle: 'Profesional Art Printing Data',
    image: 'images/bckImg.png',
    modeP:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: 'https://luchy-b.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard',
    seeSource: 'https://github.com/Luchy-B/My-Portfolio',
    languages: ['html', 'bootstrap', 'Ruby'],
   },
   {
    pTitle: 'Profesional Art Printing Data',
    image: 'images/bckImg.png',
    modeP:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: 'https://luchy-b.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard',
    seeSource: 'https://github.com/Luchy-B/My-Portfolio',
    languages: ['html', 'bootstrap', 'Ruby'],
   },
   {
    pTitle: 'Profesional Art Printing Data',
    image: 'images/bckImg.png',
    modeP:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: 'https://luchy-b.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard',
      seeSource: 'https://github.com/Luchy-B/My-Portfolio',
    languages: ['html', 'bootstrap', 'Ruby'],
   },
   {
    pTitle: 'Profesional Art Printing Data',
    image: 'images/bckImg.png',
    modeP:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: 'https://luchy-b.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard',
      seeSource: 'https://github.com/Luchy-B/My-Portfolio',
    languages: ['html', 'bootstrap', 'Ruby'],
   },
   {
    pTitle: 'Profesional Art Printing Data',
    image: 'images/bckImg.png',
    modeP:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: 'https://luchy-b.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard',
      seeSource: 'https://github.com/Luchy-B/My-Portfolio',
    languages: ['html', 'bootstrap', 'Ruby'],
   },
   {
    pTitle: 'Profesional Art Printing Data',
    image: 'images/bckImg.png',
    modeP:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    seeLive: 'https://luchy-b.github.io/',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry`s standard',
      seeSource: 'https://github.com/Luchy-B/My-Portfolio',
    languages: ['html', 'bootstrap', 'Ruby'],
   },
];

// eslint-disable-next-line no-return-assign
cards.map((card, index) => cardBtn.innerHTML += `<div class="card  rev-${index}">
            <h4 id="title">${card.pTitle}</h4>
            <p>
             ${card.shortDes}
            </p>
          <div class="tags">
          <ul class="languages">
          ${card.languages.map((lang) => `<li>${lang}</li>`).join('')}
          </ul>
          </div>
          <button class="btn-2">
            <a href="javascript:openModal(${index})" class="btn">See Project</a>
          </button>
      </div>
      `);

console.log("cards", cards[0]);

const openModal = (index) => {
  title.innerHTML = cards[index].pTitle;
  image.src = cards[index].modalImage;
  modeP.innerHTML = cards[index].modeP;
  seeLive.href = cards[index].seeLive;
  seeSource.href = cards[index].seeSource;
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
};

openModal();
closeModal();

 // /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  // /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/