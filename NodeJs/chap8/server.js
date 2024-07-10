const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const root = __dirname;

// const server = http.createServer((req, res) => {

//   // http header

//   res.setHeader("Content-Type", "text/html");

//   const url = req.url;

//   if (req.method === "POST" && url === "/") {
//     fs.readFile("page1.html", (err, data) => {
//       if (data) {
//         res.write(data);
//         res.statusCode = 200;
//       }
//       res.end();
//     });
//     const responseObject = {
//       school: "BeCode",
//       year: "2023",
//     };
//   } else if (url == "/about") {
//     fs.readFile("page2.html", (err, data) => {
//       if (data) {
//         res.write(data);
//         res.statusCode = 200;
//       }
//       res.end();
//     });
//   } else if (url == "/about-us") {
//     fs.readFile("page2.html", (err, data) => {
//       if (data) {
//         res.write(data);
//         res.statusCode = 200;
//       }
//       res.end();
//     });
//   } else if (url == "/") {
//     fs.readFile("page1.html", (err, data) => {
//       if (data) {
//         res.write(data);
//         res.statusCode = 200;
//       }
//       res.end();
//     });
//   } else {
//     fs.readFile("404.html", (err, data) => {
//       if (data) {
//         res.write(data);
//         res.statusCode = 404;
//       }
//       res.end();
//     });
//   }
// });

// server.listen(3000, "localhost", () => {
//   console.log("Listening for requests on port 3000");
// });

app.get("/", (req, res) => {
  res.sendFile("./views/page1.html", {root});
  res.status(200);
});

app.get("/about", (req, res) => {
  res.sendFile("./views/page2.html", {root});
  res.status(200);
});
app.get("/about-us", (req, res) => {
  res.sendFile("./views/page2.html", {root});
  res.status(200);
});
app.post("/", (req, res) => {
  const responseObject = {
    school: "BeCode",
    year: "2023",
  };
  res.status(200).json(responseObject);
});

app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root});
  });

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
