const express = require("express");
const app = express();
const root = __dirname;
const fs = require('fs');
app.set("view engine", "ejs");


// app.get("/", (req, res) => {
//   res.render("index", { posts: posts });
//   res.status(200);
// });

////////////////////////////// SANS JSON /////////////////////////

// app.get("/", (req, res) => {
//   res.render("index", {title: 'home'});
//   res.status(200);
// });
// app.get("/about", (req, res) => {
//   res.render("about", {title: 'about'});
//   res.status(200);
// });
// app.get("/contact", (req, res) => {
//   res.render("contact", {title: 'help'});
//   res.status(200);
// });

///////////////////////////// AVEC JSON ///////////////////////////

const routes = JSON.parse(fs.readFileSync('route.json', 'utf8'));

routes.routes.forEach(route => {
    app.get(route.route, (req, res) => {
      const title = route.title;
      res.render('index', { title });
    });
  });
app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});

// const posts = [
//   {
//     title: "Post one",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
//     author: "King Philippe",
//   },
//   {
//     title: "Post two",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
//     author: "Barack Obama",
//   },
//   {
//     title: "Post three",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
//     author: "Nelson Mandela",
//   },
//   {
//     title: "Post four",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
//     author: "Nelson Mandela",
//   },
// ];


