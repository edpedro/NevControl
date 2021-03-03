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
};
