const Account = require("../models/Account");

const expenseCard = require("./expenseCard");
const expenseExternalPeson = require("./expenseExternalPeson");

async function expense(account, value, userId, operation, accountCard) {
  if (accountCard) {
    if (operation === "conta") {
      await expenseCard(account, userId, value);
    } else {
      await expenseExternalPeson(account, userId, value);
    }
  } else {
    if (!account) {
      const negativeBalanceNegative = -value;
      const currentBalanceNegative = -value;

      const newAccount = new Account({
        negativeBalance: negativeBalanceNegative,
        currentBalance: currentBalanceNegative,
        user: userId,
      });

      await newAccount.save();
    } else {
      const negativeBalance = account.negativeBalance - value;
      const currentBalance = account.currentBalance - value;

      await Account.findByIdAndUpdate(account._id, {
        negativeBalance,
        currentBalance,
      });
    }
  }
}

module.exports = expense;
