const Transactions = require("../repositories/TransactionRepository");

module.exports = {
  async index(req, res) {
    const { month } = req.query;

    const data = await Transactions.getBalance(req.userData._id, month);

    return res.status(200).json(data);
  },
  async show(req, res) {
    const { id } = req.params;

    try {
      const data = await Transactions.getTransactionId(id);

      return res.status(200).json(data);
    } catch (err) {
      return res
        .status(400)
        .json(err, { error: "Falha na busca de transação" });
    }
  },
  async create(req, res) {
    const {
      type,
      description,
      value,
      data,
      category,
      accountCard,
      operation,
    } = req.body;

    try {
      const transaction = await Transactions.createTransactions(
        type,
        description,
        value,
        data,
        category,
        operation,
        req.userData._id,
        accountCard
      );

      return res.status(201).json({ transaction });
    } catch (err) {
      return res
        .status(400)
        .json(err, { error: "Falha no cadastro de transação" });
    }
  },
  async update(req, res) {
    const { id } = req.params;

    const {
      type,
      description,
      value,
      data,
      category,
      accountCard,
      operation,
    } = req.body;

    try {
      const transaction = await Transactions.updateTransaction(
        id,
        type,
        description,
        value,
        data,
        category,
        accountCard,
        operation
      );
      return res.status(201).json({ transaction });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Falha na atualização da transação" });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Transactions.deleteTransaction(id);

      return res
        .status(200)
        .json({ message: "Transação deletada com sucesso!" });
    } catch (error) {
      return res.status(400).json({ error: "Falha na deleção da transação" });
    }
  },
};
