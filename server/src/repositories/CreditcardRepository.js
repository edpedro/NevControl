const CreditCard = require("../models/CreditCard");
const Transaction = require("../models/Transaction");

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
  async getCreditCard(userId) {
    const creditCards = await CreditCard.find({ user: userId }).exec();

    const teste = Promise.all(
      creditCards.map(async (creditCard) => {
        const transactions = await Transaction.find({
          accountCard: creditCard._id,
        })
          .populate({ path: "user", select: "name" })
          .populate({ path: "accountCard", select: ["name", "limit"] })
          .exec();

        transactions.map((transaction) => {
          if (transaction.type === "receita") {
            creditCard.cardBalance -= transaction.value;
          } else {
            creditCard.cardBalance += transaction.value;
          }
        });

        return creditCard;
      })
    );

    return teste;
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

    const restul = await CreditCard.findOneAndRemove({ _id: id });

    return restul;
  },
  async getCreditCardId(id) {
    const creditCards = await CreditCard.findById(id).exec();

    if (!creditCards) {
      return { error: "Cartão de credito não encontrado!" };
    }

    return creditCards;
  },
};
