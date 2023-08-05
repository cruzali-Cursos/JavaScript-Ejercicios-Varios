// 18. Comprobar si una funcion retorna un valor

function function1() {
    return;    
}

function function2() {
    const A = 3;
}

function function3() {
    return 2 + 2;
}

function function4() {
    return true;
}

function function5(){
    return {};
}

let fn1 = function1();
console.log('FN1', fn1);

let fn2 = function2();
console.log('FN2', fn2);

let fn3 = function3();
console.log('fn3', fn3);

let fn4 = function4();
console.log('FN4', fn4);

let fn5 = function5();
console.log('fn5', fn5);


if (fn1 === undefined)
{
    console.log('fn1 = undefined');
}

if (fn3 === undefined)
{
    console.log('fn3 = undefined');
} else {
    console.log('fn3 retorna un valor');
}

console.log('fn5', fn4 === undefined);

console.log('typeof fn2', typeof fn2 === 'undefined');