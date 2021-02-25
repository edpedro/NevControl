const User = require("../models/User");

module.exports = {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const checkEmail = await User.find({ email });

      if (checkEmail.length >= 1) {
        return res.status(401).json({ message: "Email já possui registro" });
      }

      const newUser = new User({ name, email, password });

      const token = await newUser.generateAuthToken();

      const user = await newUser.save();

      return res
        .status(201)
        .json({ message: "Usuario cadastrado com sucesso", user, token });
    } catch (error) {
      console.log(error);
    }
  },
};
