export function setMenu() {

        // navs
        let oBotonMenu1 = document.querySelector('#menu-btn-1')
        let oBotonMenu2 = document.querySelector('#menu-btn-2')
        let oMenuTop =  document.querySelector('#menu-top')
        let oMenuBottom = document.querySelector('#menu-bottom')
        // Otros
        let aMenuItems = document.querySelectorAll("nav#menu-top a")
        let aSections = document.querySelectorAll("section")
/* CODIGO VERIFICACION >>> console.dir(aSections)  */
        let oOffsets = []
        prepararNavegacion()
        window.addEventListener('scroll', changeMenuStyle)
        // Manejadores de eventos
        oBotonMenu1.addEventListener('click', toggleMenu.bind(this))
        oBotonMenu2.addEventListener('click', toggleMenu.bind(this))
        aMenuItems.forEach(
            (item) => { item.addEventListener('click', activarItem.bind(this))}
        )

function toggleMenu(oE) {
    oE.preventDefault()
    // cambia su visibilidad
    oE.target.classList.toggle('hide')
    // cambia la visibilidad del otro icono
    if (oE.target.previousElementSibling) {
        oE.target.previousElementSibling.classList.toggle('hide')
    } else {
        oE.target.nextElementSibling.classList.toggle('hide')
    }
     // cambia la visibilidad del menu top para mobile
    oMenuTop.classList.toggle('hide')
}

function activarItem(oE) {
//    console.log('Activando Item')
    aMenuItems.forEach(
        (item) => { item.classList.remove('active')}
    )
    oE.target.classList.add('active')
}

    function prepararNavegacion() {
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
/* CODIGO VERIFICACION >>>  console.log(oOffsets) */   
    }

    function changeMenuStyle () {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >=  oOffsets['#home'] && pageOffset < oOffsets['#quiensoy']) {
            menuItem = 0
        } else if (pageOffset >= oOffsets['#quiensoy'] && pageOffset < oOffsets['#estudios']) {
             menuItem = 1
        } else if (pageOffset >= oOffsets['#estudios'] && pageOffset < oOffsets['#experiencia']) {
            menuItem = 2
        } else if (pageOffset >= oOffsets['#experiencia'] && pageOffset < oOffsets['#contacto']) {
            menuItem = 3
        } else if (pageOffset >= oOffsets['#contacto']) {
            menuItem = 5
        } else {
            menuItem = 4
        }
         aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        aMenuItems[menuItem].classList.add('active')
    }
}