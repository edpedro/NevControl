const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");

require("dotenv").config();

module.exports = {
  async create(req, res) {
    const { name, email, password } = req.body;

    try {
      if (!name || !email || !password) {
        return res.status(401).json({ message: "Favor preencher todos dados" });
      }

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
      return res.status(400).json(err);
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
  async googleLogin(req, res) {
    const tokenGoogle = req.headers.authorization.replace("Bearer", "");

    const client = new OAuth2Client(process.env.CLIENT_ID);

    try {
      if (!tokenGoogle) {
        return res.status(401).json({
          error: "Erro no token do google!",
        });
      }

      const ticket = await client.verifyIdToken({
        idToken: tokenGoogle,
        audience: process.env.CLIENT_ID,
      });

      const payload = ticket.getPayload();

      if (!payload) {
        return res.status(401).json({
          error: "Erro ao Logar!",
        });
      }
      const { email, name, sub } = payload;

      const user = await User.findByGoogleCredentials(email, sub);

      if (!user) {
        const newUser = new User({ name, email, password: sub });

        const token = await newUser.generateAuthToken();

        const user = await newUser.save();

        return res
          .status(201)
          .json({ message: "Usuario cadastrado com sucesso", user, token });
      }

      const token = await user.generateAuthToken();

      return res
        .status(201)
        .json({ message: "Usuario cadastrado com sucesso", user, token });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  },
};
