const Affirmation = require('../models/Affirmation.js');
const { sendSms } = require('../utils/twilio');
const fetchAffirmation = require('../utils/fetch.js');

module.exports = class AffirmationService {
  //send a text and store the affirmation
  static async createAffirmation(body = null) {
    const random = await fetchAffirmation();
    const quote = body ? body : random;
    //send text
    await sendSms(
      process.env.AFFIRMATION_HANDLER_NUMBER,
      `New affirmation received: ${quote}`
    );

    //store the affirmation
    const affirmation = await Affirmation.insert(quote);
    return affirmation;
  }

  static async getAllAffirmations() {
    //send text
    await sendSms(
      process.env.AFFIRMATION_HANDLER_NUMBER,
      'Got all affirmations'
    );

    //store the affirmation
    const affirmations = await Affirmation.getAll();
    return affirmations;
  }

  static async getAffirmationById(id) {
    //send text
    await sendSms(
      process.env.AFFIRMATION_HANDLER_NUMBER,
      `Got a particular affirmation: ${id}`
    );

    //store the affirmation
    const affirmation = await Affirmation.getAffirmation(id);
    return affirmation;
  }

  static async patchAffirmationById(id, quote) {
    //send text
    await sendSms(
      process.env.AFFIRMATION_HANDLER_NUMBER,
      `Updated a particular affirmation: ${id} to quote: ${quote}`
    );

    //store the affirmation
    const affirmation = await Affirmation.patchAffirmation(id, quote);
    return affirmation;
  }

  static async deleteAffirmationById(id) {
    //send text
    await sendSms(
      process.env.AFFIRMATION_HANDLER_NUMBER,
      `Deleted affirmation: ${id}`
    );

    //store the affirmation
    const affirmation = await Affirmation.deleteAffirmation(id);
    return affirmation;
  }
};
