const creditCardRepository = require("../repositories/CreditcardRepository");
module.exports = {
  async index(req, res) {
    const creditCard = await creditCardRepository.getCreditCard(
      req.userData._id
    );

    return res.status(200).json({ creditCard });
  },
  async show(req, res) {
    const { id } = req.params;

    try {
      const data = await creditCardRepository.getCreditCardId(id);

      return res.status(200).json(data);
    } catch (err) {
      return res
        .status(400)
        .json(err, { error: "Falha na busca do cartão de credito" });
    }
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
  async delete(req, res) {
    const { id } = req.params;
    try {
      await creditCardRepository.deleteCreditCard(id);

      return res
        .status(200)
        .json({ message: "Cartão de credito deletada com sucesso!" });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha na deleção do cartão de credito" });
    }
  },
};
