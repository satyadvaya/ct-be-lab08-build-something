const Relaxation = require('../models/Relaxation.js');
const { sendSms } = require('../utils/twilio');

module.exports = class RelaxationService {
  //send a text and store the relaxation
  static async createRelaxation({ technique, timing }) {
    //send text
    await sendSms(
      process.env.RELAXATION_HANDLER_NUMBER,
      `New relaxation received: ${(technique, timing)}`
    );

    //store the relaxation
    const relaxation = await Relaxation.insert(technique, timing);
    return relaxation;
  }

  static async getAllRelaxations() {
    //send text
    await sendSms(process.env.RELAXATION_HANDLER_NUMBER, 'Got all relaxations');

    //store the relaxation
    const relaxations = await Relaxation.getAll();
    return relaxations;
  }
};
