const { Router } = require('express');
const RelaxationService = require('../services/RelaxationService.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const relaxation = await RelaxationService.createRelaxation(req.body);
    res.json(relaxation);
  } catch (err) {
    next(err);
  }
});
