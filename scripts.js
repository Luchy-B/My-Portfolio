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



function validate(){
  
  let mail2 = document.getElementById("email").value;

  let regx = /^([A-Za-z0-9_\-\.\'])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;

    if (!mail2.match(regx)) 
      return false;
    else 
  return true;

  // if(regx.mail2){
  //   alert('You have provided a valid email')
  //   return true;
  // }else{
  //   return false;
  // }
    
}

 // /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  // /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/