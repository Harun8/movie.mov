const pg = require("pg");
require("dotenv").config();
const connectDB = () => {
  const conString = "localhost:5432"; // Can be found in the Details page
  const client = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: process.env.POSTGRESS_PASSWORD,
    port: 5432,
  });

  client.connect((err) => {
    if (err) {
      return console.error("could not connect to postgres", err);
    }
    client.query("SELECT * FROM users", (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log("connected to db");
      console.log(result);
      client.end();
    });
  });
};

module.exports = connectDB;
