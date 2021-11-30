const express = require("express");
const routes = require("./routes");
const path = require("path");
const ErrorPageMiddleware = require('./middlewares/ErrorPageMiddleware')
const cookieParser = require('cookie-parser');

const server = express();

// usando template engine
server.set('view engine', 'ejs');

//mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'));

server.use(cookieParser());

server.use(express.json());

//habilitar o sistema static
server.use(express.static("public"));

//usar o sitema req.body
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.use(ErrorPageMiddleware);

server.listen(3001, () => console.log('Rodando'));