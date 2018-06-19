function holaMundo(nombre) {
    return "Hola Mundo!! Soy" + nombre;
}
var nombre = "Jorge Zárate";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
// Variables y Tipos
var nombretwo = "Jorge Zárate";
var edad = 55;
var programador = true;
var lang = ["PHP", "Java", "CSS"];
nombretwo = 123;
etiqueta.innerHTML = nombretwo + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("FUERA DEL IF: " + a + " - " + b);
// Funciones y Tipados
function devuelveNumero(num) {
    return "El número" + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
