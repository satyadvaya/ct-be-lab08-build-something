const express = require('express');
// import errorMiddleware from './middleware/error.js';
// import notFoundMiddleware from './middleware/not-found.js';
// import affirmations from './controllers/affirmations.js';

const app = express();

//req.body = JSON.parse(body)
app.use(express.json());

//http://localhost:5555/api/v1/affirmations
app.use('/api/v1/affirmations', require('./controllers/affirmations.js'));

app.use('/api/v1/favorites', require('./controllers/favorites.js'));

app.use('/api/v1/activities', require('./controllers/activities.js'));

app.use('/api/v1/relaxations', require('./controllers/relaxations.js'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
