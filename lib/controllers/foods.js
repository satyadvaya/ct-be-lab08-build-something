const { Router } = require('express');
const FoodService = require('../services/FoodService.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const food = await FoodService.createFood(req.body);
      res.json(food);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const foods = await FoodService.getAllFoods();
      res.json(foods);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const food = await FoodService.getFoodById(id);
      res.json(food);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const plant = req.body.plant;
      const food = await FoodService.patchFoodById(id, plant);
      res.json(food);
    } catch (err) {
      next(err);
    }
  });
