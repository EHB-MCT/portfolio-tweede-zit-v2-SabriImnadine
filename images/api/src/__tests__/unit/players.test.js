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

  it('should return 400 if name is not formatted correctly', async () => {
    const response = await request(app).post('/api/players').send({ name: '' });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Name not formatted correctly');
  });

  it('should return 201 if player is added successfully', async () => {
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1, name: 'Lamine Yamal' }] });

    const response = await request(app).post('/api/players').send({ name: 'Lamine Yamal' });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Lamine Yamal');
  });

  it('should return 500 if there is a database error', async () => {
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).post('/api/players').send({ name: 'Lamine Yamal' });
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Database error');
  });

  it('should return 200 and list of players', async () => {
    pool.query.mockResolvedValueOnce({ rows: [{ id: 1, name: 'Sterling' }] });

    const response = await request(app).get('/api/players');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, name: 'Sterling' }]);
  });
});

