const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    limit: { type: String, require: true },
    close: { type: String, require: true },
    win: { type: String, require: true },
    bank: { type: String, require: true },
    cardBalance: { type: Number, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
    collection: "creditCards",
  }
);

const CreditCard = mongoose.model("CreditCard", userSchema);

module.exports = CreditCard;
