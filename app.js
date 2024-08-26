const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const routes = require('./routes'); // Import routes from a separate file


app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', './views'); // Set the views directory

app.use(morgan('dev')); // Use Morgan for logging HTTP requests

app.use('/', routes); // Use the defined routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
  debug(`Listening on port ${port}`);
});