const pool = require('../lib/utils/pool.js');
const twilio = require('twilio');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const Affirmation = require('../lib/models/Affirmation.js');

jest.mock('twilio', () => () => ({
  messages: {
    create: jest.fn(),
  },
}));

describe('08_build-something routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return request(app).post('/api/v1/affirmations').send({
      quote:
        'Your life is already a miracle of chance waiting for you to shape its destiny',
    });
  });

  it('creates a new affirmation in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/affirmations')
      .send({ quote: 'You know more than you think' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          quote: 'You know more than you think',
        });
      });
  });

  it('should GET all affirmations', () => {
    return request(app)
      .get('/api/v1/affirmations')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            quote:
              'Your life is already a miracle of chance waiting for you to shape its destiny',
          },
        ]);
      });
  });

  it('should GET an affirmation by id', () => {
    return request(app)
      .get('/api/v1/affirmations/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          quote:
            'Your life is already a miracle of chance waiting for you to shape its destiny',
        });
      });
  });

  it('should PATCH an affirmation by id', () => {
    return request(app)
      .patch('/api/v1/affirmations/1')
      .send({ quote: 'Do not forget to enjoy the journey' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          quote: 'Do not forget to enjoy the journey',
        });
      });
  });
});
