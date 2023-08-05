// Ejercicio 16. Validar si una variable tiene un valor asignado.

let a;
let b = 11;

// igualdad estricta
if (a === undefined)
{
    console.log('La variable `a`  aún no tiene un valor asignado.');
}

a = 'Ali C';

if (a === undefined)
{
    console.log('La variable `a` aún no tiene un valor asignado.');
} else {
    console.log('La variable a tiene un valor asignado');
}

console.log();

if (b === undefined) {
    console.log('La variable `b` aún no tiene un valor asignado');
} else {
    console.log('La variable `b` tiene un valor asignado');
}