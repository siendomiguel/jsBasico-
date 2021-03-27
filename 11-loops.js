// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

let estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
};

// ======================================= for

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
};

// ======================================= for of (parecido a un foreach)

for (let estudiante of estudiantes) {
    saludarEstudiante(estudiante);
};

// ======================================= while

while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    let estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
};