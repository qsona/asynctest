var async = require('async');
var m = require('./methods');

exports.main = function(callback) {
    var data1, data2, data3, data4, data5, data6;
    async.parallel([
        function(next) {
            m.async1(function(err, result) {
                if (err) {
                    return next(err);
                }
                data1 = result;
                next();
            });
        },
        function(next) {
            m.async2(function(err, result) {
                if (err) {
                    return next(err);
                }
                data2 = result;
                next();
            });
        },
        function(next) {
            m.async3(function(err, result) {
                if (err) {
                    return next(err);
                }
                data3 = result;
                next();
            });
        },
    ], function(err) {
        if (err) {
            return callback(err);
        }

        var data4, data5;
        async.series([
            function(next) {
                m.async4(data2, data3, function(err, result) {
                    if (err) {
                        return next(err);
                    }
                    data4 = result;
                    next();
                });
            },
            function(next) {
                if (!data4) {
                    return next();
                }
                m.async5(function(err, result) {
                    if (err) {
                        return next(err);
                    }
                    data5 = result;
                    data1.push(data5);
                    next();
                });
            },
            function(next) {
                async.map(data1, m.async6, function(err, result) {
                    if (err) {
                        return next(err);
                    }
                    data6 = result;
                    next();
                });
            }
        ], function(err) {
            if (err) {
                return callback(err);
            }
            callback(null, data6);
        });
    });
};
