const Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));

var data = fs.readFileAsync("./source.txt", "utf8")
    .then(() => {
        console.log('done reading data');
    })
    .catch((e) => {
            console.error(e.stack);
    });
    console.log('in between....');


fs.writeFileAsync("./target.txt", data)
    .then(() => {
        console.log('done writing data');
    })
    .catch((e) => {
            console.error(e.stack);
    });

console.log('More work....');
