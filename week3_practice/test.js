function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5

const multiply = function(x, y) {
    return x * y;
};

console.log(multiply(4, 5)); // 20

console.log(hoistedFunction()); // "Hoisted!"

function hoistedFunction() {
    return "Hoisted!";
}
console.log(hoistedVar); // undefined
var hoistedVar = 'This is hoisted';

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // 'I am outside!'
