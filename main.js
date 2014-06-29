var ex_sync = require('./ex_sync');
var ex_async = require('./ex_async');
//var ex_asyncblock = require('./ex_asyncblock');
var ex_co = require('./ex_co');

var result_sync, result_async, result_asyncblock, result_co;

//var asyncblock = require('asyncblock');
console.time('sync');
result_sync = ex_sync.main();
console.timeEnd('sync');
console.log(result_sync);

console.time('async');
ex_async.main(function(err, result) {
    console.timeEnd('async');
    result_async = result;
    console.log(result_async);
});

/*
console.time('asyncblock');
ex_asyncblock.main(function(err, result) {
    console.timeEnd('asyncblock');
    result_asyncblock = result;
    console.log(result_asyncblock);
});
*/
console.time('co');
ex_co.main(function(err, result) {
    console.timeEnd('co');
    result_co = result;
    console.log('co!', result_co);
});
