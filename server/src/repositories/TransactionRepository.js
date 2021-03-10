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
    console.log(
      type,
      description,
      value,
      data,
      category,
      operation,
      userId,
      accountCard
    );
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
  async getBalance(userId) {
    const transaction = await Transaction.find({ user: userId })
      .populate({ path: "user", select: "name" })
      .exec();

    const {
      accountBalance,
      negativeBalance,
      cardBalance,
      balanceExternalPerson,
    } = transaction.reduce(
      (acc, curret) => {
        switch (curret.type) {
          case "receita":
            acc.accountBalance += curret.value;
          case "despesa":
            if (curret.operation === "conta") {
              acc.negativeBalance += curret.value;
            }
          case "despesa":
            if (curret.operation === "cartao") {
              acc.cardBalance += curret.value;
            }
          case "despesa":
            if (curret.operation === "cartaoPessoaExterna") {
              acc.balanceExternalPerson += curret.value;
            }
            break;

          default:
            break;
        }
        return acc;
      },
      {
        accountBalance: 0,
        negativeBalance: 0,
        cardBalance: 0,
        balanceExternalPerson: 0,
        currentBalance: 0,
      }
    );
    const currentBalance = accountBalance - negativeBalance;
    return {
      balance: {
        accountBalance,
        negativeBalance,
        currentBalance,
        cardBalance,
        balanceExternalPerson,
      },
      data: transaction,
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
};
