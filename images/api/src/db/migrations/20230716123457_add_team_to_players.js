exports.up = function(knex) {
    return knex.schema.table('players', function(table) {
      table.string('team').nullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('players', function(table) {
      table.dropColumn('team');
    });
  };
  