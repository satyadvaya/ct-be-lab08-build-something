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

describe('08_build-something user routes for self-care foods', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return request(app).post('/api/v1/foods').send({
      plant: 'wheatgrass',
      meal: 'breakfast',
    });
  });

  it('creates a new food in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/foods')
      .send({
        plant: 'hemp',
        meal: 'lunch',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          plant: 'hemp',
          meal: 'lunch',
        });
      });
  });
});
