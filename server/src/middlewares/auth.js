const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer", "");

    if (!token) {
      return res.status(400).json({ message: "token não encontrado!" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    req.userData = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Falha na Autenticação!" });
  }
};
