// Esto nos ayudará para poder hacer decisiones.

var esUsuario = true; 

if(esUsuario) {  // con el if validamos que la condición sea true
    console.log('Tiene acceso al contenido'); 
}

// Presentamos el else 

var esUsuario = false; 

if(esUsuario) {
    console.log('Tiene acceso al contenido'); 
} else {
    console.log('Tienes que crear una cuenta para poder acceder al contenido');
}

// Ejemplo de cómo haríamos una validación

let edad = 18; 
let accion; 

if(edad >= 18) {
    accion = 'Puede votar'
} else { // call back 
    accion = 'No puede votar'
}

console.log(accion);

// Ejemplo de cómo utilizaremos el else if

let edad = 18; 
let accion;  

if(edad === 18) {
    accion = 'Puede votar, será su 1ra votación'
} else if(edad > 18) { 
    accion = 'Puede votar'
} else { // call back 
    accion = 'Aun no puede votar'
}

console.log(accion);



/* ================================================================ */ 

// Operador ternario 

let numero = 1; 
let resultado; 

if(numero === 1) {
    resultado = 'Sí son un 1'; 
} else {
    resultado = 'No soy un 1'; 
}

condition ? true : false; 

let numero = 1; 
let resultado = numero === 1 ? 'Sí son un 1' : 'No soy un 1';

console.log(resultado);


// ==============================


// Ejercicio, reaizar un piedra, papel o tijeras, utilizando condicionales, una funcion que reciba el parametro con el que vamos a jugar, y me regrese si gane o perdí. 

/*  

Variables piedra, papel y tiejeras 
una funcion que utilice condicionales para validar si el parametro que le estoy pasando gana o pierde. 

y que la funcion al final me regrese el resultado de si gané, o  perdí. 

*/ 

let opc1 = 'piedra';
let opc2 = 'papel';
let opc3 = 'tijera';

// ================================

let op1 = "Piedra";
let op2 = "Papel";
let op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```