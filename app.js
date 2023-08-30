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

  document.addEventListener('click', function(event) {
    if (!event.target.closest('#nav-bar') && !event.target.closest('#menu-btn')) {
        navBar.classList.add('hidden');
        menuBtn.classList.toggle('fa-xmark');
    }
});

const navLinks = navBar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
   
            navBar.classList.add('hidden');
            menuBtn.classList.toggle('fa-xmark');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });