var m = require('./methods');

exports.main = function() {
    var data1 = m.sync1();

    var data2 = m.sync2();
    var data3 = m.sync3();

    var data4 = sync4(data1, data2, data3);
    if (data4) {

    }
};
