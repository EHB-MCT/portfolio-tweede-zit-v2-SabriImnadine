const express = require('express');
const router = express.Router();
const { checkPlayerDetails } = require('../helpers/endpointHelpers');

module.exports = function initEndpoints(app, db) {
  router.post('/players', async (req, res) => {
    const player = req.body;
    if (checkPlayerDetails(player)) {
      try {
        const result = await db.query(
          'INSERT INTO players (first_name, last_name, age, nationality, position, club_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [player.first_name, player.last_name, player.age, player.nationality, player.position, player.club_id]
        );
        const insertedPlayer = result.rows[0];
        res.status(201).json(insertedPlayer);
      } catch (err) {
        res.status(500).json({ error: 'Database error' });
      }
    } else {
      res.status(400).send({ error: 'All player details are required' });
    }
  });

  router.get('/players/:id', async (req, res) => {
    const playerId = parseInt(req.params.id, 10);

    if (isNaN(playerId) || playerId < 0 || playerId > 999999999) {
      return res.status(400).send();
    }

    try {
      const result = await db.query(
        `SELECT players.id, players.first_name, players.last_name, players.age, players.nationality, players.position, clubs.name as club_name 
         FROM players 
         JOIN clubs ON players.club_id = clubs.id 
         WHERE players.id = $1`, 
        [playerId]
      );
      if (!result || result.rows.length === 0) {
        return res.status(404).send();
      }

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  });

  router.get('/players', async (req, res) => {
    try {
      const result = await db.query(
        `SELECT players.id, players.first_name, players.last_name, players.age, players.nationality, players.position, clubs.name as club_name 
         FROM players 
         JOIN clubs ON players.club_id = clubs.id`
      );
      const players = result.rows;
      res.json(players);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.use('/api', router);
};





