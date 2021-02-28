const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    balanceExternalPerson: { type: Number, require: true, default: 0 },
    cardBalance: { type: Number, require: true, default: 0 },
    accountBalance: { type: Number, require: true, default: 0 },
    negativeBalance: { type: Number, require: true, default: 0 },
    currentBalance: { type: Number, require: true, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
    collection: "accounts",
  }
);

const User = mongoose.model("Account", userSchema);

module.exports = User;
