function add(a, b){
    return a + b;
}

function subtract(b, a){
    return b - a;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(n){
    return n += 1;
}

function decrement(n){
    return n -= 1;
}

function makeInt(n){
    return parseInt(n, 10);
}
/*
console.log(makeInt("2"));
console.log(typeof(makeInt("2")));
*/

function preserveDecimal(n){
    return parseFloat(n);
}

/*
console.log(preserveDecimal("2.3"));
console.log(typeof(makeInt("2")));
*/