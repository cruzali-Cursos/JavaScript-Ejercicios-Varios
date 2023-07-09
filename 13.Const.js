// Ejercici 13: Creación de una constante con la sentencia const. ECMAS6 (ES6)

var nombre = "ali";
let lenguaje = 'JavaScript';
const PI = 3.141592; // Constante variable

// variable variable
// y variable constante

nombre = 'Otro';
lenguaje = 'PHP';
//PI = 3.14;  // TypeError: Assignment to constant variable.

const estudiante = {'id': 6, nombre: 'Ali Cruz'}
console.log("1", estudiante);

// Se pueden modificar solo accediendo a las propiedades del objeto
estudiante.id = 7;
estudiante.nombre = 'Sara';
console.log("2", estudiante);

estudiante = {'id': 8, nombre: 'Otro Nombre'} // TypeError: Assignment to constant variable.
// Una ves asignado un espacio para una const, no se modificar
// la ubicación de memoria a la que se refiere.
console.log(estudiante);