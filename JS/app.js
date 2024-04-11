function crearTexto() {
    let cantidad = parseInt(document.getElementById('lista').value)
    let cadena = ""
    for (f = 0; f < cantidad; f++)
        cadena += `<input type="text" name="nombre${f}" id="nombre${f}"><br>`
    document.getElementById('seccion').innerHTML = cadena
}