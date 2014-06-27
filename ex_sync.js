var m = require('./methods');

exports.main = function() {
    var data1 = m.sync1();

    var data2 = m.sync2();
    var data3 = m.sync3();

    var data4 = m.sync4(data2, data3);
    if (data4) {
        var data5 = m.sync5();
        data1.push(data5);
    }
    var data6 = data1.map(m.sync6);

    return data6; // [a, b, c, d]
};
