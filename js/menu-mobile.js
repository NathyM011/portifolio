const btnMenu = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede o evento de se propagar para o menuMobile
    menuMobile.classList.toggle('open-menu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu');
});

// Fechar o menu quando um link é clicado
const links = menuMobile.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('open-menu');
    });
});

// Fechar o menu quando qualquer área fora do menu é clicada
document.addEventListener('click', (e) => {
    if (!menuMobile.contains(e.target) && menuMobile.classList.contains('open-menu')) {
        menuMobile.classList.remove('open-menu');
    }
});