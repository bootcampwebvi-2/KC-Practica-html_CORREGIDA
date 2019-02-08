export function setMenu() {

        // navs
        let oBotonMenu1 = document.querySelector('#menu-btn-1')
        let oBotonMenu2 = document.querySelector('#menu-btn-2')
        let oMenuTop =  document.querySelector('#menu-top')
        let oMenuBottom = document.querySelector('#menu-bottom')
        // Otros
        let aMenuItems = document.querySelectorAll("nav#menu-top a")
        let aSections = document.querySelectorAll("section")
/* CODIGO VERIFICACION >>> */ console.dir(aSections) 
        let oOffsets = []

        prepararNavegacion()
        window.addEventListener('scroll', changeMenuStyle)
        // Manejadores de eventos
/*         this.oBotonMenu1.addEventListener('click', this.toggleMenu.bind(this))
        this.oBotonMenu2.addEventListener('click', this.toggleMenu.bind(this))
        this.aMenuItems.forEach(
            (item) => { item.addEventListener('click', this.activarItem.bind(this))}
        )
        window.addEventListener('scroll', this.changeMenuStyle.bind(this))

        prepararNavegacion() */


    function prepararNavegacion() {
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        console.log(oOffsets)    
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