exports.up = function(knex) {
  return knex.schema.createTable('players', function(table) {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('age').notNullable();
    table.string('nationality').notNullable();
    table.string('position').notNullable();
    table.integer('club_id').unsigned().references('id').inTable('clubs');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('players');
};