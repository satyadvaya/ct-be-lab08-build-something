const { Router } = require('express');
const Affirmation = require('../models/Affirmation.js');
const AffirmationService = require('../services/AffirmationService.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const affirmation = await AffirmationService.createAffirmation(req.body);
    res.send(affirmation);
  } catch (err) {
    next(err);
  }
});
