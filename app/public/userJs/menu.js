const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menu = document.querySelector("#menu")

openMenu.addEventListener('click',()=>{
    menu.classList.add('show-menu');
});
closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
});

