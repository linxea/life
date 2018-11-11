exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("days", table => {
      table.increments("id").primary();
      table.boolean("exercise").defaultTo(false);
      table.string("achievement");
      table.string("demo_link");
      table.string("mood").defaultTo("good");
      table.string("woke_up_at");
      table.string("slept_at");
      table
        .timestamp("created_at")
        .notNullable()
        .defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("days")]);
};
