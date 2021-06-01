const fetch = require("node-fetch");
const express = require("express");
const routes = express.Router();

const views = __dirname + "/views/";

const profile = {
  avatar: "https://github.com/danielusi.png",
  name: "Daniel Benício",
  email: "danielbenicio123@gmail.com",
  password: "jacamole",
  cep: "06436310",
};

routes.get("/", (req, res) => res.render(views + "index"));
routes.get("/signup", (req, res) => res.render(views + "signup"));
routes.post("/signup", async (req, res) => {
  const { name, email, password, cpf, cep } = req.body;
  console.log(req.body);
  const user = {
    name: name,
    email: email,
    password: password,
    cpf: cpf,
    cep: cep,
  };
  try {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });

    return res.redirect("/signup");
  } catch (error) {
    console.log(error);
  }
  return res.status(200).end();;
});
routes.get("/login", (req, res) => res.render(views + "login"));
routes.get("/forget", (req, res) => res.render(views + "forget"));
routes.get("/profile", (req, res) =>
  res.render(views + "profile", { profile })
);

module.exports = routes;
