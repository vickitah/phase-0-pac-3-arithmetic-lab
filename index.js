function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function increment(n){
    return n + 1;
}
function decrement(n){
    return n - 1;
}
function makeInt(n){
    return parseInt(n, 10)|| 0;
}
function makeInt(n){
   let parsed = parseInt(n, 10);
   return isNaN(parsed) ? NaN : parsed;
}
function preserveDecimal(n) {
      let parsed = parseFloat(n);
    return isNaN(parsed) ? NaN : parsed;
}

