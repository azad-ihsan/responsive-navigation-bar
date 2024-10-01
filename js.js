document.querySelector('.js-menu')
  .addEventListener('click', ()=>{
    let nav = document.querySelector('.js-nav');
    nav.classList.toggle('display-nav');
  })