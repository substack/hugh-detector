var hugh = require('../');
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);

var detected = hugh(1280, 720, buf);
console.dir(detected);
