const Account = require("../../models/Account");

async function expenseExternalPeson(account, userId, value) {
  if (!account) {
    const balanceExternalPerson = -value;
    const newAccount = new Account({
      balanceExternalPerson,
      user: userId,
    });
    await newAccount.save();
  } else {
    const balanceExternalPerson = account.balanceExternalPerson - value;

    await Account.findByIdAndUpdate(account._id, {
      balanceExternalPerson,
    });
  }
}

module.exports = expenseExternalPeson;
