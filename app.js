const menuBtn = document.getElementById('menu-btn');
const navBar = document.getElementById('nav-bar');

menuBtn.addEventListener('click',()=>{
    navBar.classList.toggle('hidden');
    menuBtn.classList.toggle('fa-xmark');
})

const projDivs = document.querySelectorAll('.projDivs');

projDivs.forEach(projDiv=>{
    projDiv.addEventListener('mouseenter',()=>{
        projDiv.lastElementChild.classList.toggle('hidden');
    })
    projDiv.addEventListener('mouseleave',()=>{
        projDiv.lastElementChild.classList.toggle('hidden');
    })
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

            navBar.classList.add('hidden');
            menuBtn.classList.toggle('fa-xmark');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('resize', ()=>{
    screenWidth = window.innerWidth;
});