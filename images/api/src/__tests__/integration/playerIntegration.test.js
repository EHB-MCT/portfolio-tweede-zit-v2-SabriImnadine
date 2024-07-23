const request = require('supertest');
const app = require('../../routes/app');
const { Pool } = require('pg');

jest.mock('pg', () => {
  const mPool = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('Players API', () => {
  let pool;

  beforeEach(() => {
    pool = new Pool();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new player', async () => {
    const newPlayer = { first_name: 'Lamine', last_name: 'Yamal', age: 16, nationality: 'Spanish', position: 'Forward', club_id: 1 };
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1, ...newPlayer }] });

    const response = await request(app).post('/api/players').send(newPlayer);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toMatchObject(newPlayer);

    const dbRecord = await pool.query.mock.results[0].value;
    expect(dbRecord.rows.length).toBeGreaterThan(0);
    expect(dbRecord.rows[0]).toMatchObject(newPlayer);
  });

  it('should return the correct player record', async () => {
    const playerId = 1;
    const playerData = { id: playerId, first_name: 'Raheem', last_name: 'Sterling', age: 27, nationality: 'English', position: 'Forward', club_id: 1 };
    pool.query.mockResolvedValueOnce({ rows: [playerData] });

    const response = await request(app).get(`/api/players/${playerId}`);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(playerData);

    const dbRecord = await pool.query.mock.results[0].value;
    expect(dbRecord.rows.length).toBeGreaterThan(0);
    expect(dbRecord.rows[0]).toMatchObject(playerData);
  });

  it('should return 404 for non-existent player', async () => {
    const nonExistentPlayerId = 9999;
    pool.query.mockResolvedValueOnce({ rows: [] });

    const response = await request(app).get(`/api/players/${nonExistentPlayerId}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});

    const dbRecord = await pool.query.mock.results[0].value;
    expect(dbRecord.rows.length).toBe(0);
  });

  it('should return 400 for negative player ID', async () => {
    const negativePlayerId = -1;
    const response = await request(app).get(`/api/players/${negativePlayerId}`);
    expect(response.status).toBe(400);
  });

  it('should return 400 for invalid player ID', async () => {
    const invalidPlayerId = 'invalid';
    const response = await request(app).get(`/api/players/${invalidPlayerId}`);
    expect(response.status).toBe(400);
  });

  it('should return 400 for too large player ID', async () => {
    const tooLargePlayerId = 9999999999;
    const response = await request(app).get(`/api/players/${tooLargePlayerId}`);
    expect(response.status).toBe(400);
  });

  it('should return all players', async () => {
    const playersData = [
      { id: 1, first_name: 'Raheem', last_name: 'Sterling', age: 27, nationality: 'English', position: 'Forward', club_id: 1 },
      { id: 2, first_name: 'Lamine', last_name: 'Yamal', age: 16, nationality: 'Spanish', position: 'Forward', club_id: 2 },
    ];
    pool.query.mockResolvedValueOnce({ rows: playersData });

    const response = await request(app).get('/api/players');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(playersData);

    const dbRecord = await pool.query.mock.results[0].value;
    expect(dbRecord.rows.length).toBe(playersData.length);
  });

  it('should handle database error on player creation', async () => {
    const newPlayer = { first_name: 'Lamine', last_name: 'Yamal', age: 16, nationality: 'Spanish', position: 'Forward', club_id: 2 };
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).post('/api/players').send(newPlayer);
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('error', 'Database error');
  });

  it('should handle database error on fetching player', async () => {
    const playerId = 1;
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).get(`/api/players/${playerId}`);
    expect(response.status).toBe(500);
  });

  it('should handle database error on fetching all players', async () => {
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).get('/api/players');
    expect(response.status).toBe(500);
  });
});


