// La forma de convertir un type a otro: Coercion 

// === Implicit Coercion === 

let a = 20;

let b = a + ""; 

// más ejemplos

let a = [1,2];
let b = [3,4]; 

a + b // En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.

// === Explicit coercion ===

let c = String( a );

let d = Number( c );

// Otro ejemplo

let a = 30; 
let b = a.toString();

let c = "100"; 
let d = +c; // Unary operator '+' de forma explícita convierte a número

// más ejemplos

let num1 = "3.14"; 
let num2 = 5 + +num1; 

/*  

Number + Number = Number
Number + String = String
String + Number = String
String + String = String

*/


// Todos las propiedades de valor, son strings 

