export function setForm() {

    let form = document.querySelector('#contacto')
    let oContact = {}
    form.addEventListener('submit', enviar)

    function enviar() {
        console.dir(oEv)
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value 
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#phone').value
        oContact.message = document.querySelector('#message').value
        oContact.condiciones = document.querySelector('#condiciones').checked
        oContact.opciones = getRadio( document.querySelectorAll('[name="opciones"]'))
        oContact.selection = getSelector(document.querySelector('#selection'))

        console.log(oContact)
    }

    function getRadio(aNodos) {
        console.dir(aNodos)
        for (let i = 0; i < aNodos.length; i++) {
            const item = aNodos[i]
            if (item.checked) {return item.value}
        }
    }
    function getSelector(nodo) {
        let i = nodo.selectedIndex
        return nodo[i].value
    }


}