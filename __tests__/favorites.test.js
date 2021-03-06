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

describe('08_build-something user routes for favorite affirmations', () => {
  beforeEach(() => {
    return setup(pool);
  });

  beforeEach(() => {
    return request(app).post('/api/v1/favorites').send({
      username: 'Jack',
      favoriteQuote:
        'Your life is already a miracle of chance waiting for you to shape its destiny',
    });
  });

  it('creates a new favorite affirmation associated with a user in our database and sends a text message', () => {
    return request(app)
      .post('/api/v1/favorites')
      .send({
        username: 'Jack',
        favoriteQuote: 'You know more than you think',
      })
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          username: 'Jack',
          favoriteQuote: 'You know more than you think',
        });
      });
  });

  it('should GET all favorites', () => {
    return request(app)
      .get('/api/v1/favorites')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: '1',
            username: 'Jack',
            favoriteQuote:
              'Your life is already a miracle of chance waiting for you to shape its destiny',
          },
        ]);
      });
  });

  it('should GET a favorite by id', () => {
    return request(app)
      .get('/api/v1/favorites/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          username: 'Jack',
          favoriteQuote:
            'Your life is already a miracle of chance waiting for you to shape its destiny',
        });
      });
  });

  it('should PATCH a favorite by id', () => {
    return request(app)
      .patch('/api/v1/favorites/1')
      .send({ favoriteQuote: 'Do not forget to enjoy the journey' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          username: 'Jack',
          favoriteQuote: 'Do not forget to enjoy the journey',
        });
      });
  });

  it('should DELETE a favorite by id', () => {
    return request(app)
      .delete('/api/v1/favorites/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          username: 'Jack',
          favoriteQuote:
            'Your life is already a miracle of chance waiting for you to shape its destiny',
        });
      });
  });
});
