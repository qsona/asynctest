var asyncblock = require('asyncblock');
var fs = require('fs');
console.log('asdf');
var a = asyncblock.enableTransform(module);
console.log('a', a);



asyncblock(function(flow) {
    //Start two parallel file reads
    var contents1 = fs.readFile('./main.js', 'utf8').sync();
    var contents2 = fs.readFile('./methods.js', 'utf8').defer();

    //Print the concatenation of the results when both reads are finished
    console.log(contents1 + contents2);

});
