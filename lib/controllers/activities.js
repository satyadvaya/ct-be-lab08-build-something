const { Router } = require('express');
const Activity = require('../models/Activity.js');
const ActivityService = require('../services/ActivityService.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const activity = await ActivityService.createActivity(req.body);
    res.json(activity);
  } catch (err) {
    next(err);
  }
});
