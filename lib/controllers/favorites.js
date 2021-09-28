const { Router } = require('express');
const Favorite = require('../models/Favorite.js');
const FavoriteService = require('../services/FavoriteService.js');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const favorite = await FavoriteService.createFavorite(req.body);
      res.json(favorite);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const favorites = await FavoriteService.getAllFavorites();
      res.json(favorites);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const favorite = await FavoriteService.getFavoriteById(id);
      res.json(favorite);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const favoriteQuote = req.body.favoriteQuote;
      const favorite = await FavoriteService.patchFavoriteById(
        id,
        favoriteQuote
      );
      res.json(favorite);
    } catch (err) {
      next(err);
    }
  });
