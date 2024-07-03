const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // http header
  res.setHeader('Content-Type', 'text/html');

  const url = req.url;

  if (url == "/about") {
    fs.readFile("about.html", (err, data) => {
      if (data) {
        res.write(data);
        res.statusCode = 200;
      }
      res.end();
    });
  } else if (url == "/about-us") {
    fs.readFile("about.html", (err, data) => {
      if (data) {
        res.write(data);
        res.statusCode = 200;
      }
      res.end();
    });
  } else if (url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (data) {
        res.write(data);
        res.statusCode = 200;
      }
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      if (data) {
        res.write(data);
        res.statusCode = 404;
      }
      res.end();
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
