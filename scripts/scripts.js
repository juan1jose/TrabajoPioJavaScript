/* alert("Hola Mundo"); */

/* let nombre = "Camila";
let edad = 15;
const id = 1
var estatusCurso=true;


console.log("Su nombre es" + nombre + "y su edad" + edad) */
/*
let num1 = 1;
let num2 = 2;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 + num2;
let divicion = num1 / num2;
 
console.log(" La suma es : " + suma);
console.log(" La suma es : " + resta);
console.log(" La suma es : " + multiplicacion);
console.log(" La suma es : " + divicion);*/
 /* let a = "8";
 let b = 5;

 console.log(a==b)
 console.log(a===b)

 a=10;
 b=15;

 console.log(a>b);
 console.log(a<b); */

 /* 
 
    Operadores logicos
    && - Y - Anbas condiciones deben de ser verdaderas
    || - o or al menos una de las condiciones
    != - No - Not - QUE NO!!! e invierte el valor del booleano

 
*/

/*function saludar(){
    let saludo = "Hola mundo"
    console.log(saludo)
}
saludar()

function sumar(num1,num2){
    return num1+num2 /*me devuelve el resultado de la operacion */
/*}
console.log(sumar(5,3))

function saludoPersonalizado(nombre){
    return "hola" + nombre + " !!!!"
}
console.log(saludoPersonalizado("Juancho"))*/

/*let dia = prompt("ingrese un numero entre 1 y 7");
switch (dia) {
    case "1":
        alert(`el dia ${dia} es lunes ` ) 
        break;
    case "2":
        alert(`el dia ${dia} es martes`)
        break;
    case "3":
        alert(`el dia ${dia} es miercoles`)
        break;
}*/

/*let note = parseInt(prompt("Ingrese su nota"));

switch (note){
    case 1:
        alert(`Reprobaste con esta nota tan horrible ${note}`)
        break;
    case 2:
        alert(`Reprobaste debes de dejar de ser tan aragan ${note} debes mejorar`)
        break;
    case 3:
        alert(`con esta nota ${note} debes mejorar`)
        break;
    case 4:
        alert(`Paso con esta nota ${note} raspando `)
        break;
    case 5: 
    alert(`excelente trabajo ${note} pasaste con al mejor nota `)
    break;
    }
*/
/*let limite = parseInt(prompt("ingrese un valor para contar"));
for (let i = 1; i <= limite;i++){
    console.log(i)
}*/
/* let veces= parseInt(prompt("Cuantas veces quiere repetir el mensaje"))


for (let i = 0; i <= veces; i++){
    console.log(`Este es el mensaje numero ${veces}`);
} */



/* let frutas = ["manzana", "banano","papaya","fresa"]
console.log(frutas[3]);
console.log(frutas.length);

for (let i = 0; i < frutas.length;i++){
    console.log(frutas[i]);
}

for (let fruta of frutas){
    console.log(frutas);
}
 */


/*Ejemplos de for*/ 

/* et numeros = [10,15,20,25,35];
let suma1 = 0;

for (let i = 0; i < numeros.length;i++){
    suma1 += numeros[i];
    console.log(`En el iteracion n ${i} la suma es${suma1}`);
}
 */

/*Ejecicio - 1*/
let notas = [80,90,75,85];
let suma = 0;

for (let i = 0; i < notas.length;i++){
    suma += notas[i];
    let resProm = suma/(i+1);
    console.log(`Su promedio por el corte ${i+1} es ${resProm}`)
}

let repeticion= parseInt(prompt(`ingrese el numero maximo a contar: `));
let contador = 1;

while (contador <= repeticion){
    console.log(`contaremas ${repeticion} veces y la vuelta esta en ${contador}`);
    contador++;
}