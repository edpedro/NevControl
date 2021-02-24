const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  local: {
    localUrlDatabase: process.env.DB_URI,
    secret: process.env.SECRET,
  },
};
