const http = require('http');
const fs = require('fs');

// const server = http.createServer(function(req, res){
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello from the server');
//     res.end();
// });

// server.listen(3000,'localhost', () => {
//     console.log('Listening for requests on port 3000');
// });

const server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>This is my awesome title from the server</h1>');
    // res.write('<a href="/services">I am an anchor tag</a>');
    fs.readFile('./view/index.html', (err, data) => {
        if (data) {
          res.write(data)
        }
        res.end();
      });
    
});

server.listen(3000,'localhost', () => {
    console.log('Listening for requests on port 3000');
});