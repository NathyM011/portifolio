let btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('btn-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
