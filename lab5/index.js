
function sum(arr) {
    return arr
        .filter(e => e > 20)
        .reduce((x, y) => x + y, 0);
}

function getNewArray(arr) {
    return arr
        .filter(s => s.includes('a') && s.length >= 5);
}

console.log(sum([100, 233, 20, 12, 200]));
let fruits = ["Apple", "Orange", "Plum", "asas"];
console.log(getNewArray(fruits));