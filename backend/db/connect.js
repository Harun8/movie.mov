const pg = require("pg");

var connectionString = "";

const connectDB = () => {
  const conString = "INSERT_YOUR_POSTGRES_URL_HERE"; // Can be found in the Details page
  const client = new pg.Client(conString);

  client.connect((err) => {
    if (err) {
      return console.error("could not connect to postgres", err);
    }
    client.query('SELECT NOW() AS "theTime"', (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log(result.rows[0].theTime);
      // >> output: 2018-08-23T14:02:57.117Z
      client.end();
    });
  });
};

module.exports = connectDB;
