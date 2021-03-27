// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

let numero = 1; 
let resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 