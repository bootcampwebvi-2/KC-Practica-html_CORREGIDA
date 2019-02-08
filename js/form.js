export function setForm() {

    let form = document.querySelector('#contacto')
    let oInputName = document.querySelector('#name')
    let oInputEmail = document.querySelector('#email')
    let oInputPhone = document.querySelector('#phone')
    let oTextMessage = document.querySelector('#message')
    let oSelectSeleccion = document.querySelector('#selection')
    let oData = {
        name: '',
        email: '',
        phone: '',
        message: '',
        seleccion: '',
        test:''
    }
    form.addEventListener('submit', leerContact) 
     definirValidaciones()

    function leerContact(oE) {
        oE.preventDefault()
        if (validar()) {
            guardarDatos()
        }
    }

    function guardarDatos() {
        oData = {
            name:  oInputName.value,
            email: oInputEmail.value ,
            phone: oInputPhone.value,
            message: oTextMessage.value,
            seleccion: oSelectSeleccion.options[oSelectSeleccion.selectedIndex].value
        }
    console.dir(oData)
    }
    /*
    function getSelector(nodo) {
        let i = nodo.selectedIndex
        return nodo[i].value
    }
    */

/* TEST */

function definirValidaciones() {
    let email = document.querySelector('#email')
    console.log(email)
    
            email.addEventListener("keyup", function (event) {
            if (email.validity.typeMismatch) {
                email.setCustomValidity("Por favor introduzca una dirección de correo valida");
            }   else {
                email.setCustomValidity("");
                }
            console.log(oInputPhone.validity);
            })
        }

    function validar() {
        return true
    }

}