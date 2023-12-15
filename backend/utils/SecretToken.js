require("dotenv").config();
const jwt = require("jsonwebtoken");

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 2 * 24 * 60 * 60, // Token expiry in seconds
  });
};

module.exports = createSecretToken;
