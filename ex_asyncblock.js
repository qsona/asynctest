var asyncblock = require('asyncblock');
var m = require('./methods');

var a = asyncblock.enableTransform(module);
console.log('aaaaaaaaa', a);

exports.main = function() {
    asyncblock(function() {
        var data1 = m.async1().defer();

        var data2 = m.async2().defer();
        var data3 = m.async3().defer();

        var data4 = m.async4(data2, data3).defer();
        console.log(data4);
        if (data4) {
            var data5 = m.async5().defer();
            data1.push(data5);
        }
        var data6 = data1.map(m.async6.defer());
        console.log(data6);
        return data6; // [a, b, c, d]
    });
};
