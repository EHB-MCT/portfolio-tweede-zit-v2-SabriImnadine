exports.seed = function(knex) {
    return knex('players').del()
      .then(function () {
        return knex('players').insert([
          { name: 'Sterling' },
          { name: 'Lamine Yamal' }
        ]);
      });
  };
  