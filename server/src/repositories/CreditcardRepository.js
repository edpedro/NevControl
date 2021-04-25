const moment = require("moment");

const CreditCard = require("../models/CreditCard");
const Transaction = require("../models/Transaction");

const Filter = require("../utils/FilterTransactions");

module.exports = {
  async createCreditCard(name, limit, close, win, bank, userId) {
    const credit = await CreditCard.findOne({ bank: bank }).exec();

    if (credit) {
      return { error: "Banco já cadastro" };
    }

    const newCreditCard = new CreditCard({
      name,
      limit,
      close,
      win,
      bank,
      user: userId,
    });

    const creditCard = await newCreditCard.save();

    return creditCard;
  },
  async getCreditCard(userId, month) {
    const creditCards = await CreditCard.find({ user: userId }).exec();

    const creditsResult = Promise.all(
      creditCards.map(async (creditCard) => {
        const transactions = await Transaction.find({
          accountCard: creditCard._id,
        })
          .populate({ path: "user", select: "name" })
          .populate({ path: "accountCard", select: ["name", "limit"] })
          .exec();

        const result = await Filter.filterTransactions(transactions, month);

        result.map((transaction) => {
          if (transaction.type === "receita") {
            creditCard.cardBalance -= transaction.value;
          } else {
            creditCard.cardBalance += transaction.value;
          }
        });

        return creditCard;
      })
    );

    return creditsResult;
  },
  async updateCreditCard(name, limit, close, win, bank, id) {
    const creditCard = await CreditCard.findById(id).exec();

    if (!creditCard) {
      return { error: "Cartão de credito não encontrado!" };
    }

    const update = await CreditCard.findByIdAndUpdate(
      id,
      {
        name,
        limit,
        close,
        win,
        bank,
      },
      { new: true }
    );
    return update;
  },
  async deleteCreditCard(id) {
    const creditCard = await CreditCard.findById(id).exec();

    if (!creditCard) {
      return { error: "Cartão de credito não encontrado!" };
    }

    const transactions = await Transaction.find({
      accountCard: creditCard._id,
    }).exec();

    transactions.forEach(async (transaction) => {
      await Transaction.deleteMany({ _id: transaction._id });
    });

    const restul = await CreditCard.findOneAndRemove({ _id: id });

    return restul;
  },
  async getCreditCardIdInvoice(id, month) {
    const dateCurrent = new Date();

    const monthCurrent = moment(
      dateCurrent,
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    ).format("MM");
    const year = moment(dateCurrent, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
      "YYYY"
    );

    const newMonth = month ? month : monthCurrent;

    const monthNext = month ? parseInt(month) + 1 : parseInt(monthCurrent) + 1;

    const creditCards = await CreditCard.findById(id).exec();

    if (!creditCards) {
      return { error: "Cartão de credito não encontrado!" };
    }

    const gte = `${year}-${newMonth}-${creditCards.close}`;
    const lte = `${year}-${"0" + monthNext}-${creditCards.close}`;

    const transactions = await Transaction.find({
      accountCard: creditCards._id,
      data: {
        $gte: gte,
        $lte: lte,
      },
    }).exec();

    transactions.map((transaction) => {
      if (transaction.type === "receita") {
        creditCards.cardBalance -= transaction.value;
      } else {
        creditCards.cardBalance += transaction.value;
      }
    });

    return { transactions, creditCards };
  },
  async getCreditCardId(id) {
    const creditCards = await CreditCard.findById(id).exec();

    if (!creditCards) {
      return { error: "Cartão de credito não encontrado!" };
    }

    return creditCards;
  },
};
