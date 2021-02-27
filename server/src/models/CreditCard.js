const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    limit: { type: String, require: true },
    close: { type: String, require: true },
    win: { type: String, require: true },
    bank: { type: String, require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
    collection: "creditCards",
  }
);

const User = mongoose.model("CreditCard", userSchema);

module.exports = User;
