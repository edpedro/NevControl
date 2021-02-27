const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    balanceExternalPerson: { type: Number, require: true },
    cardBalance: { type: Number, require: true },
    accountBalance: { type: Number, require: true },
    negativeBalance: { type: Number, require: true },
    currentBalance: { type: Number, require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
    collection: "accounts",
  }
);

const User = mongoose.model("Account", userSchema);

module.exports = User;
