var co = require('co');
var thunkify = require('thunkify');
var each = require('co-each');
var m = require('./methods');

exports.main = co(function *() {
    var _data = yield [thunkify(m.async1)(), thunkify(m.async2)(), thunkify(m.async3)()];
    var data1 = _data[0];
    var data2 = _data[1];
    var data3 = _data[2];

    var data4 = yield thunkify(m.async4)(data2, data3);
    if (data4) {
        var data5 = yield thunkify(m.async5)();
        data1.push(data5);
    }
    var data6 = yield data1.map(function(d) {
        return thunkify(m.async6)(d);
    });
    return data6;
});
