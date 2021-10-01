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
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const technique = req.body.technique;
      const relaxation = await RelaxationService.patchRelaxationById(
        id,
        technique
      );
      res.json(relaxation);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const relaxation = await RelaxationService.deleteRelaxationById(id);
      res.json(relaxation);
    } catch (err) {
      next(err);
    }
  });
