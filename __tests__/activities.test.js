const pool = require('../lib/utils/pool.js');
const twilio = require('twilio');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn(),
  },
}));

describe('08_build-something user routes for self-care activities', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return request(app).post('/api/v1/activities').send({
      exercise: 'parkour',
      dailyDuration: '30min',
    });
  });

  it('creates a new activity in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/activities')
      .send({
        exercise: 'unicycling',
        dailyDuration: '15min',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          exercise: 'unicycling',
          dailyDuration: '15min',
        });
      });
  });
});
