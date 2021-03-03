const creditCardRepository = require("../repositories/CreditcardRepository");
module.exports = {
  async index(req, res) {
    const creditCard = await creditCardRepository.getCreditCard(
      req.userData._id
    );

    return res.status(200).json({ creditCard });
  },
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
  async update(req, res) {
    const { id } = req.params;

    const { name, limit, close, win, bank } = req.body;

    try {
      const creditCard = await creditCardRepository.updateCreditCard(
        name,
        limit,
        close,
        win,
        bank,
        id
      );
      return res.status(201).json({ creditCard });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha na atualização do cartão de credito" });
    }
  },
};
