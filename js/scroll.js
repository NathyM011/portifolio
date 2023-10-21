document.addEventListener('DOMContentLoaded', function () {
    // Verificar a largura da tela
    if (window.innerWidth > 1010) {
        const sectionPositions = {
            'especialidades': 750,
            'topo-do-site': 0,
            'sobre': 1250,
            'formulário': 1990,
        };

        function scrollToSection(sectionId) {
            const link = document.querySelector(`a[href="#${sectionId}"]`);
            if (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetPosition = sectionPositions[sectionId];
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const fixedMenuHeight = 5; // Tamanho do menu fixo
                    const scrollPosition = targetPosition - headerHeight - fixedMenuHeight;
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth',
                    });
                });
            }
        }

        // Usando a função para as diferentes seções
        for (const sectionId in sectionPositions) {
            scrollToSection(sectionId);
        }

        // Botão "buttonTop" (scroll para a posição do formulário)
        const buttonTop = document.querySelector('#buttonTop');
        if (buttonTop) {
            buttonTop.addEventListener('click', function (e) {
                e.preventDefault();
                const formularioPosition = sectionPositions['formulário'];
                const newPosition = formularioPosition - 250;
                window.scrollTo({
                    top: newPosition,
                    behavior: 'smooth',
                });
            });
        }

        // Botão "buttonHeader" (scroll para a posição do formulário)
        const buttonHeader = document.querySelector('#buttonHeader');
        if (buttonHeader) {
            buttonHeader.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({
                    top: sectionPositions['formulário'],
                    behavior: 'smooth',
                });
            });
        }
    }
});