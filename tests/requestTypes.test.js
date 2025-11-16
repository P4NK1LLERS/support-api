const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/server');
const RequestType = require('../src/models/RequestType');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/support-api-test';

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
  }
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

beforeEach(async () => {
  await RequestType.deleteMany({});
  await RequestType.create({
    code: 'TEST_CODE',
    name: 'Test Type',
    description: 'Desc',
    priority: 'low',
    category: 'test',
    estimatedResponseTime: 1,
  });
});

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.status).toBe(200);
  expect(res.body).toEqual({ status: 'ok' });
});

test('GET /api/request-types returns array', async () => {
  const res = await request(app).get('/api/request-types');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test('POST /api/request-types creates successfully', async () => {
  const payload = {
    code: 'NEW_CODE',
    name: 'New Type',
    description: 'Desc',
    priority: 'medium',
    category: 'test'
  };
  const res = await request(app).post('/api/request-types').send(payload);
  expect(res.status).toBe(201);
  expect(res.body.code).toBe(payload.code);

  const doc = await RequestType.findOne({ code: payload.code });
  expect(doc).not.toBeNull();
});
