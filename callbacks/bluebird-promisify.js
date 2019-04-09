const Promise = require('bluebird');
const cb = Promise.promisifyAll(require("./callback"));


cb.depositAsync(-100)
    .then((output)=>{console.log(output)})
    .catch((e) => {
        console.error(e.message);
});
