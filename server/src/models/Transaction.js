const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    description: { type: String, require: true },
    value: { type: Number, require: true },
    data: { type: String, require: true },
    category: { type: String, require: true },
    type: { type: String, require: true },
    operation: { type: String, require: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    accountCard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CreditCard",
      require: true,
    },
  },
  {
    timestamps: true,
    collection: "transactions",
  }
);

const User = mongoose.model("Transaction", userSchema);

module.exports = User;
