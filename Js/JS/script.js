/*
Vamos a validar un formulario
*/

/*
Declaramos las variables generales y
accedemos a los valores de los campos
*/

//Contador nos indica el num de inputs
var array_validaciones=new Array();

//campos a validar

var nombre;
var dni;
var coche;
var enviar=document.getElementById("enviar");

/*
var nombre=document.getElementById("fname").value;
console.log(nombre);
var dni=document.getElementById("dni").value;
console.log(dni);
var coche=document.getElementById("cars").value;
console.log(cars);

var enviar=document.getElementById("enviar");
console.log(enviar);
*/

/*
Definimos funciones de comprobacíon
y útiles
*/

function validarNombre(){
    document.getElementById("span1").setAttribute("style","display:none");
    nombre=document.getElementById("fname").value;
    if(nombre.length>0){
        if(!array_validaciones.includes("nombre")){
            array_validaciones.push("nombre");
            validacionFinal()
        }
    }else{
        document.getElementById("span1").setAttribute("style","display:initial");
    }
}

function validarDni(){
    document.getElementById("span2").setAttribute("style","display:none");
    dni=document.getElementById("dni").value;
    var DNI_REGEX = /^(\d{8})([A-Z])$/;
    if(dni.match(DNI_REGEX)){
        if(!array_validaciones.includes("dni")){
            array_validaciones.push("dni");
            validacionFinal()
        }
    }else{
        document.getElementById("span2").setAttribute("style","display:initial");
    }
}

function validarCoche(){
    document.getElementById("span3").setAttribute("style","display:none");
    coche=document.getElementById("cars").value;
    
    console.log(coche);

    if(coche=="audi"){
        if(!array_validaciones.includes("coche")){
            array_validaciones.push("coche");
            validacionFinal()
        }
    }else{
        document.getElementById("span3").setAttribute("style","display:initial");
    }
}

function validacionFinal(){
    enviar.setAttribute()
    //comprobamos si array_validaciones=3
    //En caso afirmativo, desploqueamos el boton de enviar
    if(array_validaciones.length==3){
        enviar.removeAttribute("disabled");
    }else{
        enviar.disabled=true;
    }
}