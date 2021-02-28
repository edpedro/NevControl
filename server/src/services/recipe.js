const Account = require("../models/Account");

async function recipe(account, value, userId) {
  if (!account) {
    const newAccount = new Account({
      accountBalance: value,
      currentBalance: value,
      user: userId,
    });

    await newAccount.save();
  } else {
    const accountBalance = account.accountBalance + value;
    const currentBalance = account.currentBalance + value;

    await Account.findByIdAndUpdate(account._id, {
      accountBalance,
      currentBalance,
    });
  }
}

module.exports = recipe;
