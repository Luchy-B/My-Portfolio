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
// const body = document.getElementById('body');
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

function openMobileMenu() {
  closeNav.style.display = 'block';
}

function closeMobileMenu() {
  closeNav.style.display = 'none';
}

openMobileMenu();
closeMobileMenu();

// eslint-disable-next-line no-return-assign
cards.map((card, index) => cardBtn.innerHTML += `<div class="card  rev-${index}">
        <div class="img-container">
          <img src="${card.image}" alt="Tonic" />
        </div>
        <div class="content">
          <div class="project_name">
            <h3 id="title">${card.pTitle}</h3>
          </div>
          <div class="project_info">
            ${card.roles.map((role, idx) => `<div class="company">
              <p>${role}</p>
            </div><img class="dot-${idx}" src="images/dot.png" alt="dot" />`).join('')}
            
          </div>
          <div class="description">
            <p>
             ${card.shortDes}
            </p>
          </div>
          <ul class="languages">
          ${card.languages.map((lang) => `<li class="langu">${lang}</li>`).join('')}
          </ul>
          <div class="button-container">
            <a href="javascript:openModal(${index})" class="btn">See Project</a>
          </div>
        </div>
      </div>
      `);

const openModal = (index) => {
  title.innerHTML = cards[index].pTitle;
  image.src = cards[index].image;
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