const express = require('express');
const router = express.Router();
const { checkPlayerName } = require('../helpers/endpointHelpers');

module.exports = function initEndpoints(app, db) {
  router.post('/players', async (req, res) => {
    const player = req.body;
    if (checkPlayerName(player.name)) {
      try {
        const result = await db.query('INSERT INTO players (name) VALUES ($1) RETURNING *', [player.name]);
        const insertedPlayer = result.rows[0];
        res.status(201).json(insertedPlayer);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.status(400).send({ message: 'Name not formatted correctly' });
    }
  });

  router.get('/players/:id', async (req, res) => {
    const playerId = parseInt(req.params.id, 10);

    // Validate player ID
    if (isNaN(playerId) || playerId < 0 || playerId > 999999999) {
      return res.status(400).send();
    }

    try {
      const result = await db.query('SELECT * FROM players WHERE id = $1', [playerId]);
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
      const result = await db.query('SELECT * FROM players');
      const players = result.rows;
      res.json(players);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.use('/api', router); 
};




