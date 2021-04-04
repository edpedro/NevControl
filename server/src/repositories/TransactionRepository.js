const Transaction = require("../models/Transaction");
const Filter = require("../utils/FilterTransactions");

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
  async getBalance(userId, month) {
    const transactions = await Transaction.find({ user: userId })
      .populate({ path: "user", select: "name" })
      .populate({ path: "accountCard", select: ["name", "limit", "bank"] })
      .sort({ data: "desc" })
      .exec();

    const result = await Filter.filterTransactions(transactions, month);

    const { accountBalance, negativeBalance } = result.reduce(
      (acc, curret) => {
        switch (curret.type) {
          case "receita":
            if (curret.operation === "conta") {
              acc.accountBalance += curret.value;
            }
            if (curret.operation === "cartao") {
              acc.cardBalance -= curret.value;
            }
            break;
          case "despesa":
            if (curret.operation === "conta") {
              acc.negativeBalance += curret.value;
            }

          default:
            break;
        }
        return acc;
      },
      {
        accountBalance: 0,
        negativeBalance: 0,
        currentBalance: 0,
      }
    );

    const currentBalance = accountBalance - negativeBalance;
    return {
      balance: {
        accountBalance,
        negativeBalance,
        currentBalance,
      },
      data: result,
    };
  },
  async updateTransaction(
    id,
    type,
    description,
    value,
    data,
    category,
    accountCard,
    operation
  ) {
    const transaction = await Transaction.findById(id).exec();

    if (!transaction) {
      return { error: "Transação não encontrado!" };
    }

    const update = await Transaction.findByIdAndUpdate(
      id,
      {
        id,
        type,
        description,
        value,
        data,
        category,
        accountCard,
        operation,
      },
      { new: true }
    );
    return update;
  },
  async deleteTransaction(id) {
    const transaction = await Transaction.findById(id).exec();

    if (!transaction) {
      return { error: "Transação não encontrado!" };
    }

    const restul = await Transaction.findOneAndRemove({ _id: id });

    return restul;
  },
  async getTransactionId(id) {
    const transaction = await Transaction.findById(id).exec();

    if (!transaction) {
      return { error: "Transação não encontrado!" };
    }

    return transaction;
  },
};
