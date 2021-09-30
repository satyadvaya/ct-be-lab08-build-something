const { Router } = require('express');
const FoodService = require('../services/FoodService.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const food = await FoodService.createFood(req.body);
    res.json(food);
  } catch (err) {
    next(err);
  }
});
