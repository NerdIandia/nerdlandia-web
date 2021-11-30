const fetch = require("node-fetch");

module.exports = {
  registerView: (req, res) => {
    return res.render("signup");
  },
  loginView: (req, res) => {
    return res.render("login");
  },
  register: async (req, res) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      const [, [, token]] = Object.entries(data);

      res.cookie('token', token);

      return res.redirect("/profile");
    } catch (error) {
      console.log(error);
      return res.status(200).end();
    }
    
  },
  login: async (req, res) => {

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      const [, [, token]] = Object.entries(data);

      res.cookie('token', token);

      return res.redirect("/profile");
    } catch (error) {
      return res.status(200).end();
    }
  },
};
