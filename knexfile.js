require("dotenv").config();

// Need to enable SSL connection for pg to connect
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  client: "pg",
  connection: process.env.DATEBASE_URL,
  migrations: {
    tableName: "migrations",
    directory: "deploy/db/migrations"
  },
  seeds: {
    directory: "deploy/db/seeds"
  }
};
