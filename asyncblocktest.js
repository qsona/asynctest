var asyncblock = require('asyncblock');

function getArray(callback) {
    setImmediate(function() {
        callback(null, [5, 10, 15]);
    });
}
function getNum(callback) {
    setImmediate(function() {
        callback(null, 10);
    });
}
function sum(num1, num2, callback) {
    setImmediate(function() {
        callback(null, num1 + num2);
    });
}
function triple(num, callback) {
    setImmediate(function() {
        callback(null, num * 3);
    });
}

if (asyncblock.enableTransform(module)) {
    return;
}

asyncblock(function() {
    var ary = getArray().defer();
    var num1 = getNum().defer();
    var num2 = getNum().defer();
    var sum_result = sum(num1, num2).defer();

    var result = ary.map(function(n) {
        return triple(n).defer();
    });

    console.log(result);
});
