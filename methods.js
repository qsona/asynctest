function toAsync(fn, delay, context) {
    return function() {
        var callback = arguments[arguments.length - 1];
        var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
        var newFn = function() {
            try {
                var result = fn.apply(context, args);
            } catch (e) {
                return callback(e);
            }
            callback(null, result);
        };
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

exports.sync4 = function(a, b) {
    return a + b === 5;
};

exports.sync5 = function() {
    return 'D';
};

exports.sync6 = function(str) {
    return str.toLowerCase();
};

exports.async1 = toAsync(exports.sync1, 100);
exports.async2 = toAsync(exports.sync2, 200);
exports.async3 = toAsync(exports.sync3, 300);
exports.async4 = toAsync(exports.sync4, 100);
exports.async5 = toAsync(exports.sync5, 100);
exports.async6 = toAsync(exports.sync6, 50);

