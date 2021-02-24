const mongoose = require("mongoose");
const database = require("./db.config");

mongoose.Promise = global.Promise;

mongoose
  .connect(database.local.localUrlDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("A base de dados foi conectado!");
    },
    (err) => {
      console.log(`Erro ao conectar.. ${err}`);
      process.exit();
    }
  );
