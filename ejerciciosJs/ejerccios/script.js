/*******************************************
 * 🌟 Introducción a JavaScript (JS)
 *******************************************/

// 🟡 JS es un lenguaje interpretado que corre en el navegador y en servidores (Node.js).
// 🟡 Es débilmente tipado: no define tipos estrictos.
// 🟡 JS permite manipular HTML, responder a eventos, y realizar lógica compleja.


// ************************************************
// 📌 1. Tipos de datos y typeof
// ************************************************

let numero = 42;
let texto = "Hola mundo";
let booleano = true;
let indefinido;
let nulo = null;
let objeto = { nombre: "Ana", edad: 30 }; //json javascript object notation, key value 
let arreglo = ["casa","auto",  1, 2, 3]; //array coleccion d objestos (ordenados)
let funcion = function() { return "Hola"; };

console.log(typeof numero);      // number
console.log(typeof texto);       // string
console.log(typeof booleano);    // boolean
console.log(typeof indefinido);  // undefined
console.log(typeof nulo);        // object (curiosidad histórica)
console.log(typeof objeto);      // object
console.log(typeof arreglo);     // object
console.log(typeof funcion);     // function


// ************************************************
// 📌 2. Variables y Scope: var, let, const
// ************************************************

// var globalVar = "soy global con var";
// let bloqueLet = "soy de bloque con let";
// const constante = "no se puede cambiar";

// function pruebaScope() {
//     var dentroFuncion = "var dentro de función";
//     let dentroBloque = "let dentro de función";
//     console.log(dentroFuncion);
//     console.log(dentroBloque);
// }

// pruebaScope();
// console.log(globalVar);
// console.log(bloqueLet);
// console.log(constante);


// ************************************************
// 📌 3. Operadores y coerción
// ************************************************

// let suma = 10 + "5";   // '105' (string)
// let resta = "10" - 2;  // 8 (número)
// let multi = "3" * "2"; // 6 (coerción automática)
// let booleano = !!"texto"; // true

// console.log(suma, resta, multi, booleano);


// ************************************************
// 📌 4. Condicionales if / else
// ************************************************

// let edad = 18;

// if (edad >= 18) {
//     console.log("Es mayor de edad");
// } else {
//     console.log("Es menor de edad");
// }


// ************************************************
// 📌 5. Switch
// ************************************************

// let fruta = "banana";

// switch (fruta) {
//     case "manzana":
//         console.log("Es una manzana");
//         break;
//     case "banana":
//         console.log("Es una banana");
//         break;
//     default:
//         console.log("Fruta no reconocida");
// }


// ************************************************
// 📌 6. Ciclo for
// ************************************************

// for (let i = 0; i < 5; i++) {
//     console.log("Iteración número:", i);
// }


// ************************************************
// 📌 7. Ciclo while y do...while
// ************************************************

// let contador = 0;
// while (contador < 3) {
//     console.log("while:", contador);
//     contador++;
// }

// let n = 0;
// do {
//     console.log("do...while:", n);
//     n++;
// } while (n < 3);


// ************************************************
// 📌 8. Funciones declaradas y flecha
// ************************************************

// function saludar(nombre) {
//     return "Hola " + nombre;
// }

// const despedir = (nombre) => {
//     return "Chau " + nombre;
// }

// console.log(saludar("Ana"));
// console.log(despedir("Juan"));


// ************************************************
// 📌 9. Funciones con parámetros por defecto
// ************************************************

// function saludar(nombre = "invitado") {
//     console.log("Hola", nombre);
// }

// saludar();           // Hola invitado
// saludar("Camila");   // Hola Camila


// ************************************************
// 📌 10. Arrays y for...of
// ************************************************

// const numeros = [10, 20, 30, 40];

// for (let numero of numeros) {
//     console.log("Valor:", numero);
// }


// ************************************************
// 📌 11. Objetos y for...in
// ************************************************

// const persona = { nombre: "Luis", edad: 25 };

// for (let clave in persona) {
//     console.log(clave, ":", persona[clave]);
// }


// ************************************************
// 📌 12. Métodos de array básicos
// ************************************************

// let frutas = ["manzana", "banana"];
// frutas.push("pera");
// console.log(frutas); // ["manzana", "banana", "pera"]
// frutas.pop();
// console.log(frutas); // ["manzana", "banana"]


// ************************************************
// 📌 13. Callback simple
// ************************************************

// function procesar(nombre, callback) {
//     callback(nombre);
// }

// function saludar(nombre) {
//     console.log("Hola " + nombre);
// }

// procesar("Lucía", saludar);


// ************************************************
// 📌 14. Función que retorna función
// ************************************************

// function multiplicador(factor) {
//     return function(numero) {
//         return numero * factor;
//     };
// }

// const porDos = multiplicador(2);
// console.log(porDos(5)); // 10


// ************************************************
// 📌 15. Hoisting (elevación)
// ************************************************

// console.log(x); // undefined
// var x = 5;

// // Las funciones declaradas también se "elevan":
// console.log(sumar(3, 4));
// function sumar(a, b) {
//     return a + b;
// }


// ************************************************
// 📌 16. Template literals
// ************************************************

// let nombre = "María";
// let edad = 30;
// console.log(`Hola ${nombre}, tenés ${edad} años`);

