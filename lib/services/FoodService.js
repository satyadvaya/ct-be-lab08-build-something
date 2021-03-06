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

  static async getAllFoods() {
    //send text
    await sendSms(process.env.FOOD_HANDLER_NUMBER, 'Got all foods');

    //store the food
    const foods = await Food.getAll();
    return foods;
  }

  static async getFoodById(id) {
    //send text
    await sendSms(
      process.env.FOOD_HANDLER_NUMBER,
      `Got a particular food: ${id}`
    );

    //store the food
    const food = await Food.getFood(id);
    return food;
  }

  static async patchFoodById(id, plant) {
    //send text
    await sendSms(
      process.env.FOOD_HANDLER_NUMBER,
      `Updated a particular food: ${id} to plant: ${plant}`
    );

    //store the food
    const food = await Food.patchFood(id, plant);
    return food;
  }

  static async deleteFoodById(id) {
    //send text
    await sendSms(process.env.FOOD_HANDLER_NUMBER, `Deleted Food: ${id}`);

    //store the food
    const food = await Food.deleteFood(id);
    return food;
  }
};
