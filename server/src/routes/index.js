const express = require("express");
const auth = require("../middlewares/auth");

const UserController = require("../controllers/UserController");
const TransactionController = require("../controllers/TransactionController");
const CreditCard = require("../controllers/CreditCardController");

const router = express.Router();

router.post("/register", UserController.create);
router.post("/login", UserController.login);
router.post("/login-google", UserController.googleLogin);

router.post("/transacao", auth, TransactionController.create);
router.get("/transacao", auth, TransactionController.index);
router.get("/transacao/:id", auth, TransactionController.show);
router.put("/transacao/:id", auth, TransactionController.update);
router.delete("/transacao/:id", auth, TransactionController.delete);

router.post("/creditcard", auth, CreditCard.create);
router.get("/creditcard", auth, CreditCard.index);
router.get("/creditcard/:id", auth, CreditCard.show);
router.get("/creditcard/invoce/:id", auth, CreditCard.showInvoce);
router.put("/creditcard/:id", auth, CreditCard.update);
router.delete("/creditcard/:id", auth, CreditCard.delete);

module.exports = router;
