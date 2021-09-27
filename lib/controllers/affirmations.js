const { Router } = require('express');
const Affirmation = require('../models/Affirmation.js');
const AffirmationService = require('../services/AffirmationService.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const affirmation = await AffirmationService.createAffirmation(req.body);
      res.send(affirmation);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const affirmations = await AffirmationService.getAllAffirmations();
      res.send(affirmations);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const affirmation = await AffirmationService.getAffirmationById(id);
      res.send(affirmation);
    } catch (err) {
      next(err);
    }
  });
