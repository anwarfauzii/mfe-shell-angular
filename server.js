'use strict';

const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cors = require('cors');

require('dotenv').config();

const _port = process.env.PORT || 4200;
const _dirPath = path.join(__dirname, 'dist/project-collab');

const app = express();

app.use(cors({
  origin: ['http://demo-dcc.thinkspedia.id','https://demo-dcc.thinkspedia.id', 'http://localhost:4200'],
  credentials: true,
}));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(compression());

// Point static path to dist
app.use(express.static(_dirPath));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/project-collab/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, function() {
  console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + _port);
});
