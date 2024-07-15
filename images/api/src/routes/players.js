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


