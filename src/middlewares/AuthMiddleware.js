const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { token } = req.cookies;

  if(!token) {
    return res.redirect('/login');
  }

  try {
    const user = await jwt.verify(token, "secret");

    req.user = user;

    return next();
  } catch (error) {
    return res.redirect('/login');
  }
};
