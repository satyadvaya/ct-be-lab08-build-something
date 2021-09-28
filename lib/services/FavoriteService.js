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

    //store the affirmation
    const favorite = await Favorite.insert(username, favoriteQuote);
    return favorite;
  }

  static async getAllFavorites() {
    //send text
    await sendSms(process.env.FAVORITE_HANDLER_NUMBER, 'Got all favorites');

    //store the affirmation
    const favorites = await Favorite.getAll();
    return favorites;
  }
};
