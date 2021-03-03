const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
    collection: "categories",
  }
);

const Category = mongoose.model("Category", userSchema);

module.exports = Category;
