let articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 },
    { nombre: 'mouse', costo: 35000 },
    { nombre: 'parlante', costo: 50000 }
]


// ======= Metodos para recorrer arrays ======= (generan un nuevo array)


//   Metodo Filter  
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */ 
});

console.log(articulosFiltrados);

 //   Metodo Map 

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  
});

console.log(nombreArticulos);

 //   Metodo Find
 /* De igual forma, con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */

let encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});

console.log(encuentraArticulos);

/*
Por si a alguien le quedó alguna duda con respecto a la diferencia entre find y filter:

El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.
*/

//   Metodo forEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//   Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Every

/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

let articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos); 

//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */

let costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal); 

//   Metodo Includes

let numeros = [1, 2, 3, 4, 5, 6];

let incluyeNumero = numeros.includes(2); 

console.log(incluyeNumero);

