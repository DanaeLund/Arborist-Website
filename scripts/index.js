

const menuBtn = document.querySelector('.burger-menu-button');
const menuBtnPopout = document.querySelector('.burger-menu-popout');
const closeMenuBtn = document.querySelector('.close-menu-button');

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) (
        menuBtnPopout.style.display = "flex",
        menuOpen = true
    )
})

closeMenuBtn.addEventListener("click", () => {
    if(menuOpen) (
        menuBtnPopout.style.display = "none",        
        menuOpen = false
    )
})