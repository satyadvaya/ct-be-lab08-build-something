const { Router } = require('express');
const RelaxationService = require('../services/RelaxationService.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const relaxation = await RelaxationService.createRelaxation(req.body);
      res.json(relaxation);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const relaxations = await RelaxationService.getAllRelaxations();
      res.json(relaxations);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const relaxation = await RelaxationService.getRelaxationById(id);
      res.json(relaxation);
    } catch (err) {
      next(err);
    }
  });
