const { Router } = require('express');
const Favorite = require('../models/Favorite.js');
const FavoriteService = require('../services/FavoriteService.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const favorite = await FavoriteService.createFavorite(req.body);
    res.send(favorite);
  } catch (err) {
    next(err);
  }
});
