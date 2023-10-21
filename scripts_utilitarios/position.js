//esse script ajuda a capturar a exata posição de cada seção so site, desde o início do documento. Dessa forma fica mais fácil determinar até onde o scroll vai descer

document.addEventListener('DOMContentLoaded', function () {
    // Capture a seção desejada
    const minhaSecao = document.getElementById('formulário');

    // Verifique se a seção foi encontrada antes de acessar o getBoundingClientRect
    if (minhaSecao) {
        const rect = minhaSecao.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYYOffset;
        const top = rect.top + scrollTop;
        console.log('Posição da seção (a partir do topo do documento):', top);
    } else {
        console.log('Seção não encontrada.');
    }
});