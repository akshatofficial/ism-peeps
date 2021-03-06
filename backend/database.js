const mongoose = require("mongoose");

const DbConnect = () => {
  const DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.log.bind(console, "Connection Error!"));
  db.once("open", () => {
    console.log("DB Connected");
  });
};

module.exports = DbConnect;