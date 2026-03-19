function mostrar() {
    var masInfo = document.getElementById("mas_info"); // Obtiene el elemento con id "mas_info", que se mostrará si el usuario elige "Si"
    var aviso = document.getElementById("aviso"); // Obtiene el elemento con id "aviso", que se mostrará si el usuario elige "No"
    var radios = document.getElementsByName("elige"); // Obtiene todos los inputs tipo radio que tengan name="elige"

    for (var i = 0; i < radios.length; i++) { // Recorre todos los radios
        if (radios[i].checked) { // Comprueba cuál de los radios está seleccionado
            if (radios[i].value === "Si") { // Si el valor del radio seleccionado es "Si"
                masInfo.style.display = "inline"; // Muestra el bloque "mas_info"
                aviso.style.display = "none"; // Oculta el bloque "aviso"
            } else { // Si el valor NO es "Si"
                masInfo.style.display = "none"; // Oculta "mas_info"
                aviso.style.display = "inline"; // Muestra "aviso"
            }
        }
    }
}