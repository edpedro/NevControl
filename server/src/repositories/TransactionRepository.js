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
  async getBalance(userId) {
    var transaction = await Transaction.find({ user: userId }).exec();

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
            break;
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
      accountBalance,
      negativeBalance,
      currentBalance,
      cardBalance,
      balanceExternalPerson,
      transaction,
    };
  },
};
