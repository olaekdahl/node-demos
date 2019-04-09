var http = require('http');
var fs = require('fs');
var url = require('url');


//curl --data email=ola@ciracon.com localhost:8080/data
var server = http.createServer((req,resp)=>{
    if(req.url.match('/data')){
        var data = url.parse(req.url, true).query;
        console.log(data.email);
        resp.end(`Hello ${data.email}`);
    } else {
        //console.log(req.url);
        resp.setHeader('content-type', 'text/html');
        var data = fs.createReadStream('./data.html');
        data.pipe(resp);
    }
});

server.on('request', (req, res) => {
    if(req.url === '/shutdown'){
        console.log('shutting down...');
        res.end('shutting down...');
        server.close();
    }
});

server.listen(8080, ()=>{console.log('starting server on 8080...')});