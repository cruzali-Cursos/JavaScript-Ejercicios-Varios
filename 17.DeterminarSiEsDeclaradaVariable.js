//17. Determinar si una variable ha sido declarada con la funcion typeof

let a; // definido
let b = 11; // definido y declarado

console.log(typeof a);
console.log(typeof b);

if (typeof a === 'undefined')
{
    console.log('a No tiene asignado un valor');
} else {
    console.log('a  tiene asignado un valor');
}


if (typeof b === 'undefined')
{
    console.log('b no tiene valor');
} else {
    console.log('b  tiene valor');
}