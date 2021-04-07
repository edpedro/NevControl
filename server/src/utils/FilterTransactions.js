const moment = require("moment");
module.exports = {
  async filterTransactions(transactions, month) {
    const dateCurrent = moment(new Date());
    const date = moment(dateCurrent, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format("MM");

    const dateValue = month ? month : date;
   
    const transaction = await transactions.filter((transaction) => {
      const date = moment(transaction.data, "YYYY-MM-DD").format("MM");

      return date === dateValue;
    });

    return transaction;
  },
};
