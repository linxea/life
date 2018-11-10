const Knex = require("knex");
const { Model } = require("objection");
const connection = require("../../knexfile");
const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Day extends Model {
  static get tableName() {
    return "days";
  }
}

module.exports = { Day };
