console.log("Hello world");
// console.log(global);

// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);


// const path = require('path');
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// const math = require('./math');
// console.log(math.add(2,3));

const {add, sub, mul, div} = require('./math');
console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));