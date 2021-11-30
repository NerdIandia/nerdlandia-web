const UserProvider = require('../providers/UserProvider')

module.exports = {
  show: async (req, res) => {
    const profile = await UserProvider(req);

    return res.render("index", { profile });
  }
}