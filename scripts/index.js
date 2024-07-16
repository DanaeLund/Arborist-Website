const MENUBTN = document.querySelector('.burger-menu-button');
const MENUBTNPOPOUT = document.querySelector('.burger-menu-popout');
const CLOSEMENUBTN = document.querySelector('.close-menu-button');

let menuOpen = false;

MENUBTN.addEventListener("click", () => {
    if(!menuOpen) (
        MENUBTNPOPOUT.style.display = "flex",
        menuOpen = true
    )
})

CLOSEMENUBTN.addEventListener("click", () => {
    if(menuOpen) (
        MENUBTNPOPOUT.style.display = "none",        
        menuOpen = false
    )
})