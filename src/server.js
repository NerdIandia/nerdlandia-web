const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

// usando template engine
server.set('view engine', 'ejs');

//mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'));

//habilitar o sistema static
server.use(express.static("public"));

//usar o sitema req.body
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(3001, () => console.log('Rodando'));