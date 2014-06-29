var asyncblock = require('asyncblock');

if (asyncblock.enableTransform(module)) {
    return;
}

asyncblock(function() {
    var ary = getArray().sync();
    var num = getNum().defer();
    var unused1 = getNum().sync();
    var unused2 = plus1(num).defer();
    // console.log(num); // it becomes to work if this line is deleted
    ary.push(num);
    console.log(ary);
});

function getArray(callback) {
    setImmediate(function() {
        callback(null, [1, 2]);
    });
}
function getNum(callback) {
    setImmediate(function() {
        callback(null, 3);
    });
}
function plus1(num1, callback) {
    setImmediate(function() {
        callback(null, num1 + 1);
    });
}
