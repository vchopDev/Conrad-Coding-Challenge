const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require("../v1/routes/index");

const server = express();
const NODE_ENV = process.env.NODE_ENV || 'development';

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.set('env', NODE_ENV);
server.use(logger('tiny'));
server.use('/v1', routes);
server.use(express.static('public'));

module.exports = server;