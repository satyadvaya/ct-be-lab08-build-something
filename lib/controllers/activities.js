const { Router } = require('express');
const ActivityService = require('../services/ActivityService.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const activity = await ActivityService.createActivity(req.body);
      res.json(activity);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const activities = await ActivityService.getAllActivities();
      res.json(activities);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const activity = await ActivityService.getActivityById(id);
      res.json(activity);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const exercise = req.body.exercise;
      const activity = await ActivityService.patchActivityById(id, exercise);
      res.json(activity);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const activity = await ActivityService.deleteActivityById(id);
      res.json(activity);
    } catch (err) {
      next(err);
    }
  });
