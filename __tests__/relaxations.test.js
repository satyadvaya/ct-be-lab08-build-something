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

describe('08_build-something user routes for self-care relaxations', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return request(app).post('/api/v1/relaxations').send({
      technique: 'meditation',
      timing: 'morning',
    });
  });

  it('creates a new relaxation in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/relaxations')
      .send({
        technique: 'hiking',
        timing: 'afternoon',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          technique: 'hiking',
          timing: 'afternoon',
        });
      });
  });
});
