console.log(new String('JavaScript'));


console.log(new Array(2,3,5,7,9,11));

function restar(a,b)
{
    return a - b;
}

console.log(restar(5, 10));

let restarFn = new Function('a', 'b', 'return a - b');

console.log(restarFn);

let persona = {id: 1, nombre: 'Ali'};

console.log(persona);

console.log(persona.nombre);