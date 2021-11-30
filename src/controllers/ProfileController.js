const profile = require("../test/profile");
const fetch = require("node-fetch");

module.exports = {
  forgetView: (req, res) => {
    return res.render('forget');
  },
  profileView: (req, res) => {
    return res.render('profile', { profile: req.user });
  },
  update: async (req, res) => {
    const { token } = req.cookies;

    try {
      const response = await fetch("http://localhost:3000/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      const [, [, token]] = Object.entries(data);

      req.cookie("token", token);

      return res.redirect("/profile");
    } catch (error) {
      
    }
  }
}