var ex_sync = require('./ex_sync');
var ex_async = require('./ex_async');
var ex_asyncblock = require('./ex_asyncblock');

var result_sync, result_async, result_asyncblock, result_co;

/*
console.time(1);
result_sync = ex_sync.main();
console.timeEnd(1);
console.log(result_sync);

console.time(2);
ex_async.main(function(err, result) {
    console.timeEnd(2);
    result_async = result;
    console.log(result_async);
});
*/

console.time(3);
ex_asyncblock.main(function(err, result) {
    console.timeEnd(3);
    result_asyncblock = result;
    console.log(result_asyncblock);
});
