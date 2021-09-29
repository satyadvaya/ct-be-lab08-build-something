const Favorite = require('../models/Favorite.js');
const { sendSms } = require('../utils/twilio');

module.exports = class FavoriteService {
  //send a text and store the favorite
  static async createFavorite({ username, favoriteQuote }) {
    //send text
    await sendSms(
      process.env.FAVORITE_HANDLER_NUMBER,
      `New favorite received: ${(username, favoriteQuote)}`
    );

    //store the favorite
    const favorite = await Favorite.insert(username, favoriteQuote);
    return favorite;
  }

  static async getAllFavorites() {
    //send text
    await sendSms(process.env.FAVORITE_HANDLER_NUMBER, 'Got all favorites');

    //store the favorite
    const favorites = await Favorite.getAll();
    return favorites;
  }

  static async getFavoriteById(id) {
    //send text
    await sendSms(
      process.env.FAVORITE_HANDLER_NUMBER,
      `Got a particular favorite: ${id}`
    );

    //store the favorite
    const favorite = await Favorite.getFavorite(id);
    return favorite;
  }

  static async patchFavoriteById(id, favoriteQuote) {
    //send text
    await sendSms(
      process.env.FAVORITE_HANDLER_NUMBER,
      `Updated a particular favorite: ${id} to favoriteQuote: ${favoriteQuote}`
    );

    //store the favorite
    const favorite = await Favorite.patchFavorite(id, favoriteQuote);
    return favorite;
  }

  static async deleteFavoriteById(id) {
    //send text
    await sendSms(
      process.env.FAVORITE_HANDLER_NUMBER,
      `Deleted Favorite: ${id}`
    );

    //store the favorite
    const favorite = await Favorite.deleteFavorite(id);
    return favorite;
  }
};
