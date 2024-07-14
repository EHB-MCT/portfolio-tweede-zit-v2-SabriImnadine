const express = require('express');
const router = express.Router();
const { checkPlayerName } = require('../helpers/endpointHelpers');

module.exports = function initEndpoints(app, db) {
  router.post('/players', async (req, res) => {
    const player = req.body;
    if (checkPlayerName(player.name)) {
      try {
        const insertedPlayer = await db('players').insert(player).returning('*');
        res.status(201).json(insertedPlayer[0]);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.status(400).send({ message: 'Name not formatted correctly' });
    }
  });

  router.get('/players', async (req, res) => {
    try {
      const players = await db('players');
      res.json(players);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.use('/api', router); 
};

