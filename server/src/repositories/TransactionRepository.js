const Transaction = require("../models/Transaction");

module.exports = {
  async createTransactions(
    type,
    description,
    value,
    data,
    category,
    operation,
    userId,
    accountCard
  ) {
    const newTransaction = new Transaction({
      description,
      value,
      data,
      category,
      type,
      operation,
      user: userId,
      accountCard: accountCard,
    });

    const transaction = await newTransaction.save();

    return transaction;
  },
};
