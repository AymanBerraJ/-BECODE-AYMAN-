const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
});

server.listen(3000,'localhost', () => {
    console.log('Listening for requests on port 3000');
});