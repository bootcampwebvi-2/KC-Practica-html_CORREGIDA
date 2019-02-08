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
    }

   form.addEventListener('submit', leerContact)
   validacionEmail()
   validacionPhone()
   // validacionMessage()
   validacionseleccion()

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
    if (oData.seleccion == 'op5'){
        oData.output = "op5_texto";
  
    } 
    console.dir(oData)
    }

/* FUNCION DE VALIDACION DE EMAIL CORRECTA */
    function validacionEmail() {
        let email = document.querySelector('#email')
            email.addEventListener("keyup", function (event) {
            if (email.validity.typeMismatch) {
                email.setCustomValidity("Por favor, introduzca una dirección de correo valida");
                }   else {
                email.setCustomValidity("");
// verificacion >>> console.dir(email.validity)
                }
            })
} 

/* FUNCION DE VALIDACION DE PHONE CORRECTA */
function validacionPhone() {
    let phone = document.querySelector('#phone');
    phone.addEventListener("keyup", function (event) {
        if (isNaN(phone.value)) {
// verificacion >>> console.log ("Not OK");
            phone.setCustomValidity("Por favor, introduzca un numero de telefono válido, solo numeros");
        }   else {
            phone.setCustomValidity("");
// verificacion >>> console.log ("OK para un numero");         
        } 
    }) 
}

/* FUNCION DE VALIDACION DE SELECCION CORRECTA */
function validacionseleccion() {
    let valselection = oSelectSeleccion.options[oSelectSeleccion.selectedIndex].value; 
    let msg;
    console.log(valselection);
        if (valselection == "op5") {
       msg = '<textarea name="output" id="output" cols="30" rows="10" placeholder="Mensaje"></textarea>';
       output.innerHTML = msg;

// verificacion >>> 
        console.log ("OK para op5");
        }   else {
// verificacion >>> 
        console.log ("OK para las otras opciones");         
        }
}

    function validar() {
        return true
    }
}