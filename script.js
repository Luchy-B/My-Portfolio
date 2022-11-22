let toggleButton = document.querySelector('.toggle-Icon');
let navbarLinks = document.querySelector('.dskNav-toggle');

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})