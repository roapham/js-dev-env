// var express = require('express'),
//   path = require('path'),
//   open = require('open'),

//   port = 3000,
//   app = express();

/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {"id": 1, "firstName": "roa1", "lastName": "pham", "email": "roa1@roa.com"},
    {"id": 2, "firstName": "roa2", "lastName": 'pham', "email": "roa2@roa.com"},
    {"id": 3, "firstName": "roa3", "lastName": "pham", "email": "roa3@roa.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
