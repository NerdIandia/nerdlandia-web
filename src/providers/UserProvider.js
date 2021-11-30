const jwt = require('jsonwebtoken');

module.exports = async (req) => {
  const { token } = req.cookies;

  try {
    const user = await jwt.verify(token, "secret");
    return user;
  } catch (error) {
    return undefined;
  }
}