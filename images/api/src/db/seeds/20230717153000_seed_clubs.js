exports.seed = function(knex) {
    return knex('clubs').del()
      .then(function () {
        return knex('clubs').insert([
          { id: 1, name: 'Manchester City' },
          { id: 2, name: 'Barcelona' },
          { id: 3, name: 'Real Madrid' },
          { id: 4, name: 'Chelsea' },
          { id: 5, name: 'Liverpool' },
          { id: 6, name: 'Paris Saint-Germain' },
          { id: 7, name: 'Bayern Munich' },
          { id: 8, name: 'Juventus' },
          { id: 9, name: 'AC Milan' },
          { id: 10, name: 'Inter Milan' }
        ]);
      });
  };
  