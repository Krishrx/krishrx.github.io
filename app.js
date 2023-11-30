const menuBtn = document.getElementById('menuToggleIcon');
const navBar = document.getElementById('nav-bar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('change');
    if (menuBtn.classList.contains('change')) {
        navBar.classList.remove('-translate-y-full');
        navBar.classList.add('translate-y-0')
    }
    else {
        navBar.classList.remove('translate-y-0');
        navBar.classList.add('-translate-y-full')
    }
})

const openModalButtons = document.querySelectorAll('.openModalButton')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
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
            menuBtn.classList.toggle('change');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('resize', ()=>{
    screenWidth = window.innerWidth;
});