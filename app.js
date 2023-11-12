const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-xmark');
    if (menuBtn.classList.contains('fa-xmark')) {
        navBar.classList.remove('-translate-y-full');
        navBar.classList.add('translate-y-0')
    }
    else {
        navBar.classList.remove('translate-y-0');
        navBar.classList.add('-translate-y-full')
    }
})

openModalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
  });
  
  
  
  window.addEventListener('click',(e)=>{
    if(e.target===modal){
      modal.classList.add('hidden');
    }
  })




const navLinks = navBar.querySelectorAll('a');
let screenWidth = window.innerWidth;

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        if (screenWidth <= 768) {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            navBar.classList.remove('translate-y-0');
            navBar.classList.add('-translate-y-full')
            menuBtn.classList.toggle('fa-xmark');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('resize', ()=>{
    screenWidth = window.innerWidth;
});