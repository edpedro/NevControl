const CreditCard = require("../models/CreditCard");

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
    const creditCard = await CreditCard.find({ user: userId }).exec();

    return creditCard;
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
};
