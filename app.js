const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articleRouter');
const homeRouter = require('./routes/homeRouter');

const app = express();
app.use(morgan('dev'));

// for view
app.set('view engine', 'ejs');

// route
app.use('/', homeRouter);
app.use('/', articleRouter);

// DB connection
mongoose
  .connect('mongodb://localhost/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch(() => {
    console.log('PROBLEM CONNECTING DB');
  });

// start server
const port = 7000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is runnong at port ${port}`);
});
