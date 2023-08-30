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