var asyncblock = require('asyncblock');
var m = require('./methods');

var a = asyncblock.enableTransform(module);
if (a) {
    return;
}

exports.main = function(callback) {
    asyncblock(function() {
        var data1 = m.async1().defer();
        var data2 = m.async2().defer();
        var data3 = m.async3().defer();

        var data4 = m.async4(data2, data3).sync();
        if (data4) {
            var data5 = m.async5().defer();
            data1.push(data5);
        }
        //console.log(data1);
        var data6 = data1.map(function(d) {
            return m.async6(d).defer();
        });
        callback(null, data6); // [a, b, c, d]
    });
};
