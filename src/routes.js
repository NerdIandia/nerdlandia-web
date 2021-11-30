const fetch = require("node-fetch");
const express = require("express");
const routes = express.Router();

const IndexController = require("./controllers/IndexController");
const AuthController = require("./controllers/AuthController");
const ProfileController = require("./controllers/ProfileController");

const authMiddleware = require('./middlewares/AuthMiddleware');

routes.get("/", IndexController.show);

routes.get("/login", AuthController.loginView);
routes.get("/signup", AuthController.registerView);
routes.post("/login", AuthController.login);
routes.post("/signup", AuthController.register);

routes.get("/forget", ProfileController.forgetView);
routes.get("/profile", authMiddleware, ProfileController.profileView);

module.exports = routes;
