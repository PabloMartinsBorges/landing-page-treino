const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

/*função anonima*/
menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        NavMenu.classList.toggle('ativo');
    })