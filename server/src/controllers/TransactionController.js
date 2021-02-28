const Transaction = require("../models/Transaction");
const Account = require("../models/Account");
const CreditCard = require("../models/CreditCard");

const mongoose = require("mongoose");

const recipe = require("../services/recipe");
const expense = require("../services/expense");

module.exports = {
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

    const newTransaction = new Transaction({
      description,
      value,
      data,
      category,
      type,
      operation,
      user: req.userData._id,
      accountCard: accountCard,
    });

    const transaction = await newTransaction.save();

    var account = await Account.findOne({ user: req.userData._id }).exec();

    if (type === "receita") {
      await recipe(account, value, req.userData._id);
    } else {
      await expense(account, value, req.userData._id, operation, accountCard);
    }

    return res.status(201).json({ transaction });

    try {
    } catch (error) {
      return res.status(400).json({ error: "Falha no cadastro de transação" });
    }
  },
};
