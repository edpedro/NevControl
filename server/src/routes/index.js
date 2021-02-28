const express = require("express");
const auth = require("../middlewares/auth");

const UserController = require("../controllers/UserController");
const TransactionController = require("../controllers/TransactionController");

const router = express.Router();

router.post("/register", UserController.create);
router.post("/login", UserController.login);

router.post("/transacao", auth, TransactionController.create);

module.exports = router;
