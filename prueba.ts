function holaMundo(nombre){
    return "Hola Mundo!! Soy"+ nombre;
}

var nombre = "Jorge Zárate";
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);

// Variables y Tipos

var nombretwo:any = "Jorge Zárate";
var edad:number = 55;
var programador:boolean = true;
var lang: Array<string> = ["PHP","Java","CSS"];

nombretwo = 123;

etiqueta.innerHTML = nombretwo +" - "+edad;


var a = 7;
var b = 12;

if (a===7){
    let a = 4;
    var b = 1;
    console.log("DENTRO DEL IF: "+a+" - "+b);
}
console.log("FUERA DEL IF: "+a+" - "+b);



// Funciones y Tipados

function devuelveNumero(num:number):string{
    return "El número"+num;
}

function devuelveString(texto:string):number{
    if (texto == "hola") {
        var num = 66;    
    }else{
        var num = 90;
    }
    return num;
}

alert(devuelveNumero(34));
alert(devuelveString("hola"));