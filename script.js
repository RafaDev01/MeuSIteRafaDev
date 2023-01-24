const btnMobile = document.querySelector('.menu--mobile');
const retornaLinkMenu = [...document.querySelectorAll('#menu > li > a')]
const input_aux = document.querySelector('.input--aux')
const nav = document.querySelector('.nav');
const body = document.querySelector('body')

function toggleMenu(event){
    nav.classList.toggle('active');
    body.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
        input_aux.checked = active
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
        input_aux.checked = active
    }

    /*if(event.type === 'touchstart'){
        event.preventDefault()
    }*/
}

/*
const navegaMenu =(event)=>{
    retornaLinkMenu.forEach((element)=>{
        let aux = 0;
        element.addEventListener('click', ()=>{
            toggleMenu(event)
        })
    })
}*/


btnMobile.addEventListener('click', toggleMenu)
/*btnMobile.addEventListener('touchstart', toggleMenu)*/


