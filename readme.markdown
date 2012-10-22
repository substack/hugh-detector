# hugh-detector

detect the color red in an image

# example

``` js
var hugh = require('hugh-detector');
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);

var detected = hugh(1280, 720, buf);
console.dir(detected);
```

***

```
$ node example/detect.js example/red_00.jpg 
true
$ node example/detect.js example/notred_00.jpg 
false
```

# methods

``` js
var hugh = require('hugh-detector')
```

## var detected = hugh(width, height, buf)

Return whether the image data in `buf` with dimensions `width` and `height`
contains sufficient redness as a boolean.

# install

With [npm](https://npmjs.org) do:

```
npm install hugh-detector
```

# license

BSD
```
