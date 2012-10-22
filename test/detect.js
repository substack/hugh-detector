var test = require('tap').test;
var hugh = require('../');
var fs = require('fs');

test('detect red', function (t) {
    var files = [
        __dirname + '/../example/notred_00.jpg',
        __dirname + '/../example/red_00.jpg',
    ].map(function (file) {
        return fs.readFileSync(file);
    });
    
    var buf0 = files[0];
    var buf1 = files[1];
    
    t.equal(hugh(1280, 720, buf0), false);
    t.equal(hugh(1280, 720, buf1), true);
    t.end();
});
