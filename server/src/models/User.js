const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    process.env.SECRET
  );
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  if (!email || !password) {
    throw new Error("Favor preencher todos dados!");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email não encontrado!");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Senha invalida!");
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
