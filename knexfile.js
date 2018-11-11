require("dotenv").config();

// Need to enable SSL connection for pg to connect
const pg = require("pg");

// My local database does not support SSL connections
// TODO: Find out if we can do that, probably can -_-
const isLocal = process.env.APP_ENV === "local";

if (!isLocal) {
  pg.defaults.ssl = true;
}

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    tableName: "migrations",
    directory: "deploy/db/migrations"
  },
  seeds: {
    directory: "deploy/db/seeds"
  }
};
