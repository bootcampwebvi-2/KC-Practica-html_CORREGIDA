export function setForm() {
    let form = document.querySelector('#contacto')
    let oInputName = document.querySelector('#name')
    let oInputEmail = document.querySelector('#email')
    let oInputPhone = document.querySelector('#phone')
    let oTextMessage1 = document.querySelector('#message')
    let oSelectSeleccion = document.querySelector('#selection')
    let oTextMessage2 = document.querySelector('#output')

    let oData = {
        name: '',
        email: '',
        phone: '',
        message1: '',
        seleccion: '', 
        message2: ''
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
// message1: oTextMessage1.value, --> Mensaje completo del textArea, y limitado a 150 palabras en Message3
            seleccion: oSelectSeleccion.options[oSelectSeleccion.selectedIndex].value,
        }
// verificacion >>>  console.log (oTextMessage2.value)
        if (oData.seleccion !== 'op5') {
            oData.message2 = oTextMessage2.value;
        } else {
            oData.message2 = oTextMessage2.childNodes[0].value;
        }

/* GUARDA LOS DATOS en MESSAGE3, las 150 primeras palabras de MESSAGE1 */
        {
            var resultArray =[];
            var str = oTextMessage1.value.replace(/[\t\n\r\.\?\!]/gm,' ');
            var wordArray = str.split(" ");
    
            for (var i = 0; i < wordArray.length; i++) {
              var item = wordArray[i].trim();
              if (item.length > 0) {
                    resultArray.push(item);        
                }
            }
            oData.message3 = resultArray.slice(0,150);
        }
    console.dir(oData)
    }

/* FUNCION DE VALIDACION DE EMAIL CORRECTA */
    function validacionEmail() {
        oInputEmail.addEventListener("keyup", function (event) {
            if (oInputEmail.validity.typeMismatch) {
                oInputEmail.setCustomValidity("Por favor, introduzca una dirección de correo valida");
                }   else {
                    oInputEmail.setCustomValidity("");
//verificacion >>> console.dir(oInputEmail.validity);
                }
            })
} 

/* FUNCION DE VALIDACION DE PHONE CORRECTA */
    function validacionPhone() {
    oInputPhone.addEventListener("keyup", function (event) {
        if (isNaN(oInputPhone.value)) {
//verificacion >>> console.log ("Not OK");
            oInputPhone.setCustomValidity("Por favor, introduzca un numero de telefono válido, solo numeros");
        }   else {
            oInputPhone.setCustomValidity("");
//verificacion >>> console.log ("OK para numeros");         
        } 
    }) 
}

/* FUNCION DE VALIDACION DE SELECCION CORRECTA */
    function validacionseleccion() {
        let msg;
        oSelectSeleccion.addEventListener("change", function (event) {
            if (oSelectSeleccion.options[oSelectSeleccion.selectedIndex].value == "op5") {
            // verificacion  console.log("Opcion 5");
            msg = '<input type="text" id="output"></input>'
            // Otra manera de introducir texto >>> msg = '<textarea name="output" id="myInput" cols="20" rows="1" placeholder="Mensaje"></textarea>';
            output.innerHTML = msg;
        } else {
        // Verificacion >>> console.log ("OK para las otras opciones"); 
        return true;
        }
     }) 
    }

/* FUNCION VALIDAR */
function validar() {
        return true
    }
}