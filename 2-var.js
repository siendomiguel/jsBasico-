/* Variable es un lugar en memoria
Es una representación de algún lugar en la memoria para guardar datos
 */

let nombre = "Diego"; // Nombre apuntará en algún lugar en la memoria (nosotros no sabemos donde, pero eso no es importante), pero dirá la señal de = tomará ese string y lo guardará en ese lugar.  y después si queremos utilizar ese valor, utilizaremos la variable Nombre para pedir que nos traigan ese string de memoria.

// = es igual a operador de asignación 

let edad; // Declarar
edad = 30; // Inicializar 

let elementos = ['Computadora', 'Celular']; // Aquí la variable seleccionará toda una sección para los elementos del array, y después tendremos acceso a toda la sección destinada en memoria.

let persona = {   // de igual forma para el objeto
    nombre: "Miguel",
    edad: 26,
    cumpleaños: "15 de abril"
}

console.log(elementos[2]); // consola es de igual forma una variable que le pertenece al navegador, con cierto espacio en memoria, y con un tipo de comportamiento especial. Donde Log es un método de la función