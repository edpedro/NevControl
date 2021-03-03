const express = require("express");
const auth = require("../middlewares/auth");

const UserController = require("../controllers/UserController");
const TransactionController = require("../controllers/TransactionController");
const CreditCard = require("../controllers/CreditCardController");

const router = express.Router();

router.post("/register", UserController.create);
router.post("/login", UserController.login);

router.post("/transacao", auth, TransactionController.create);
router.get("/transacao", auth, TransactionController.index);
router.put("/transacao/:id", auth, TransactionController.update);
router.delete("/transacao/:id", auth, TransactionController.delete);

router.post("/creditcard", auth, CreditCard.create);
router.get("/creditcard", auth, CreditCard.index);

module.exports = router;
