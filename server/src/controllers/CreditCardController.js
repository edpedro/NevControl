const creditCardRepository = require("../repositories/CreditcardRepository");
module.exports = {
  async create(req, res) {
    const { name, limit, close, win, bank } = req.body;

    try {
      const creditCard = await creditCardRepository.createCreditCard(
        name,
        limit,
        close,
        win,
        bank,
        req.userData._id
      );
      return res.status(201).json({ creditCard });
    } catch (error) {
      return res.status(400).json({ error: "Falha no cadastro de transação" });
    }
  },
};
