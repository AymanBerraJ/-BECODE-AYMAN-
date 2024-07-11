const express = require("express");
const app = express();
const usersRoute = require('./routes/User')
const postRoute = require('./routes/Post')
const CommentsRoute = require('./routes/Comments')

app.use('/user', usersRoute);
app.use('/post', postRoute);
app.use('/comments', CommentsRoute);


app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});