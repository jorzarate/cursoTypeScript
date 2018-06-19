interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string
    public modelo: string;
    public velocidad:number;

    constructor(modelo = null){
        this.color = "Blanco"
        this.velocidad = 0;

        if (modelo == null) {
            this.modelo = "Fiat";
        }else{
            this.modelo = modelo;
        }
    }

    public getColor(){
        return this.color;
    }

    public setColor(color:string){
        this.color = color
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
    }
}

var coche = new Coche("Ford");
var coche_dos = new Coche;
var coche_tres = new Coche;

coche.setColor("rojo");
coche_dos.setColor("Amarillo");
coche_tres.setColor("Azul");

coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("El color del coche 1 es: "+coche.getColor());
console.log("El color del coche 2 es: "+coche_dos.getColor());
console.log("El color del coche 3 es: "+coche_tres.getColor());

console.log("La velocidad del coche 1 es: "+coche.getVelocidad());

coche.frenar();
console.log("La velocidad del coche 1 despues de frenar es: "+coche.getVelocidad());

console.log("El modelo del coche es: "+coche.getModelo());