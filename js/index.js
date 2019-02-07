import { Menu } from './menu.js'
// import { FormContact } from './form-contact.js'


/**
 * @class Index
 * 
 * Se instancia al acceder a la página index
 * Depende de:
 *  - la clase Menu para gestionar los menus, 
 *      comportidos con la otra página del sitio
 *  - la clase FormCoctact, responsable del 
 *      formulario de contactos
 */

export class Index {
    constructor() {
        // elementos del DOM
        //this.oBotonOlderPost = document.querySelector('#olderPostsBtn')
        this.oFormContact =  document.querySelector('#contacto')
        this.oInputName = document.querySelector('#name')
        this.oInputEmail = document.querySelector('#email')
        this.oInputPhone = document.querySelector('#phone')
        this.oTextMessage = document.querySelector('#message')
        this.oSelectSeleccion = document.querySelector('#selection')
        
        this.oData = {
            name: '',
            email: '',
            phone: '',
            message: '',
            seleccion: ''
        }

        this.oFormContact.addEventListener('submit', this.leerContact.bind(this)) 
        this.definirValidaciones()
    }

    leerContact(oE) {
        oE.preventDefault()
        if (this.validar()) {
            this.guardarDatos()
        }
    }

    guardarDatos() {
        this.oData = {
            name:  this.oInputName.value,
            email: this.oInputEmail.value ,
            phone: this.oInputPhone.value,
            message: this.oTextMessage.value,
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value
        }
    console.dir(this.oData)
    }

    processRadio(aNodos) {
        let value
        aNodos.forEach(
            (item) => {if(item.checked) {value = item.value}}
        )
        return value
    }

    definirValidaciones() {
        this.oInputName.setCustomValidity('El nombre es obligatorio')
        console.dir(this.oInputName.validity)
        console.dir(this.oInputEmail.validity)

    }

    validar() {
        return true
    }
}