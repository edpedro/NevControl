const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;

    try {
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
      return res.status(400).json({ error: "Falha no cadastro" });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findByCredentials(email, password);

      if (!user) {
        return res.status(401).json({
          error: "Erro ao Logar! Verifique login e senha!",
        });
      }

      const token = await user.generateAuthToken();

      return res
        .status(201)
        .json({ message: "Usuario logado com sucesso", user, token });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  },
};
