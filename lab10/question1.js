
Array.prototype.even = function () {
    let res = [];
    for (let val of this) {
        if (val % 2 == 0) res.push(val);
    }
    return res;
};

Array.prototype.odd = function () {
    let res = [];
    for (let val of this) {
        if (val % 2 != 0) res.push(val);
    }
    return res;
};


console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());