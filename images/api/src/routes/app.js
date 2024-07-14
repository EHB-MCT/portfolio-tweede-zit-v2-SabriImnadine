const express = require('express');
const { Pool } = require('pg');
const initEndpoints = require('./players');
const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING,
});

initEndpoints(app, pool);

module.exports = app;

