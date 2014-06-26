function toAsync(fn, delay, context) {
    return function() {
        var callback = arguments[arguments.length - 1];
        var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
        var newFn = function() {
            try {
                var result = fn.apply(context, args);
                callback(null, result);
            } catch (e) {
                callback(e);
            }
        });
        if (delay) {
            setTimeout(newFn, delay);
        } else {
            setImmediate(newFn);
        }
    };
}

exports.sync1 = function() {
    return [ 'A', 'B', 'C' ];
};

exports.sync2 = function() {
    return 2;
};

exports.sync3 = function() {
    return 3;
};

exports.sync4 = function(a, b, c) {
    return a + b + c === 6;
};

exports.async1 = function(callback) {
    setTimeout(function() {
        callback(null, 1);
    }, 100);
};

exports.async2 = function(callback) {
    setTimeout(function() {
        callback(null, 2);
    }, 200);
};

exports.async3 = function(callback) {
    setTimeout(function() {
        callback(null, 3);
    }, 300);
};

exports.async4 = function(a, b, c, callback) {
    setTimeout(function() {
        callback(null, a + b + c === 6);
    }, 100);
};
