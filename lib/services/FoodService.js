const Food = require('../models/Food.js');
const { sendSms } = require('../utils/twilio');

module.exports = class FoodService {
  //send a text and store the food
  static async createFood({ plant, meal }) {
    //send text
    await sendSms(
      process.env.FOOD_HANDLER_NUMBER,
      `New food received: ${(plant, meal)}`
    );

    //store the food
    const food = await Food.insert(plant, meal);
    return food;
  }
};
