var asyncblock = require('asyncblock');
var a = asyncblock.enableTransform();
console.log(a);

var fs = require('fs');

asyncblock(function(flow){
    console.time('time');

    setTimeout(flow.add(), 1000);
    flow.wait(); //Wait for the first setTimeout to finish

    setTimeout(flow.add(), 2000);
    flow.wait(); //Wait for the second setTimeout to finish

    console.timeEnd('time'); //3 seconds
});

