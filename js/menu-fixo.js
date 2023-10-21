window.addEventListener('scroll', function() {
    // Verificar a largura da tela
    if (window.innerWidth > 1010) {
        let header = document.querySelector('#header');
        header.classList.toggle('rolagem', window.scrollY > 0);
    }
});