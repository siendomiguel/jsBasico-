// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

let objecto = {}; // Object Literal Syntax 

let miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio // Acceder a la propiedad (key)
miAuto.modelo // Acceder a la propiedad (key)

miAuto.detallesDelAuto(); 


// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

let newAuto = new auto("Tesla", "Model 3", 2020);

// Solucion de alguien al reto https://static.platzi.com/media/user_upload/ejercicio-1330da3a-fbf9-47ec-9131-07e0c072638d.jpg

// ============== Solucion 2 de alguien más 
let brands = ['Toyota', 'Mazda', 'Renault']
let cars = []

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

for (let i = 0; i < 30; i++)
    cars.push(new Car(brands[Math.floor(i/10)], `Serie ${i % 10}`, 1999 + i % 10))

console.log(cars)