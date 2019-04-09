var http = require('http');
var cluster = require('cluster');
var numChild = require('os').cpus().length * 2;
var process = require('process');

if(cluster.isMaster) {
    console.log(`Number of cpus ${numChild}`);
    console.log(`Master PID: ${process.pid}`);
    for (let index = 0; index < numChild; index++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        cluster.fork();
    })
} else {
    http.createServer((req,resp)=>{
        // console.log(`Child PID: ${process.pid}`);
        resp.write('Hello World from cluster!');
        resp.end();
    }).listen(8081);

    console.log(`Worker ${process.pid} started`);
}

