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

  it('should return 400 if player details are not complete', async () => {
    const response = await request(app).post('/api/players').send({ first_name: '' });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('All player details are required');
  });

  it('should return 201 if player is added successfully', async () => {
    const newPlayer = { first_name: 'Lamine', last_name: 'Yamal', age: 16, nationality: 'Spanish', position: 'Forward', club_id: 2 };
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1, ...newPlayer }] });

    const response = await request(app).post('/api/players').send(newPlayer);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newPlayer);
  });

  it('should return 500 if there is a database error', async () => {
    const newPlayer = { first_name: 'Lamine', last_name: 'Yamal', age: 16, nationality: 'Spanish', position: 'Forward', club_id: 2 };
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).post('/api/players').send(newPlayer);
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Database error');
  });

  it('should return 200 and list of players', async () => {
    const playersData = [{ id: 1, first_name: 'Raheem', last_name: 'Sterling', age: 27, nationality: 'English', position: 'Forward', club_id: 1 }];
    pool.query.mockResolvedValueOnce({ rows: playersData });

    const response = await request(app).get('/api/players');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(playersData);
  });
});

