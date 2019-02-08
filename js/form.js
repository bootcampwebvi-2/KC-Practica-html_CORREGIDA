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
        seleccion: ''
    }

   form.addEventListener('submit', leerContact)
   // validacionNombre() 
   validacionEmail()
   validacionPhone()
   // validacionMessage()
   // validacionseleccion()

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

/* function getSelector(nodo) {
        let i = nodo.selectedIndex
        return nodo[i].value
    } */

/* FUNCION DE VALIDACION DE EMAIL CORRECTA */
    function validacionEmail() {
        let email = document.querySelector('#email')
            email.addEventListener("keyup", function (event) {
            if (email.validity.typeMismatch) {
                email.setCustomValidity("Por favor, introduzca una dirección de correo valida");
                }   else {
                email.setCustomValidity("");
// VERIFICACION >>> console.dir(email.validity)
                }
            })
} 

/* FUNCION DE VALIDACION DE PHONE CORRECTA */
function validacionPhone() {
    let phone = document.querySelector('#phone');
    phone.addEventListener("keyup", function (event) {
        if (isNaN(phone.value)) {
// VERIFICACION >>> console.log ("Not OK");
            phone.setCustomValidity("Por favor, introduzca un numero de telefono válido, solo numeros");
        }   else {
            phone.setCustomValidity("");
// VERIFICACION >>> console.log ("OK para un numero");         
        } 
    }) 
}
    function validar() {
        return true
    }
}