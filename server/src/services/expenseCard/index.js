const Account = require("../../models/Account");

async function expenseCard(account, userId, value) {
  if (!account) {
    const cardBalance = -value;
    const newAccount = new Account({
      cardBalance,
      user: userId,
    });
    await newAccount.save();
  } else {
    const cardBalance = account.cardBalance - value;

    await Account.findByIdAndUpdate(account._id, {
      cardBalance,
    });
  }
}

module.exports = expenseCard;
