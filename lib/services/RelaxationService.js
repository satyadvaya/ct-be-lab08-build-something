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

  static async getRelaxationById(id) {
    //send text
    await sendSms(
      process.env.RELAXATION_HANDLER_NUMBER,
      `Got a particular relaxation: ${id}`
    );

    //store the relaxation
    const relaxation = await Relaxation.getRelaxation(id);
    return relaxation;
  }

  static async patchRelaxationById(id, technique) {
    //send text
    await sendSms(
      process.env.RELAXATION_HANDLER_NUMBER,
      `Updated a particular relaxation: ${id} to technique: ${technique}`
    );

    //store the relaxation
    const relaxation = await Relaxation.patchRelaxation(id, technique);
    return relaxation;
  }

  static async deleteRelaxationById(id) {
    //send text
    await sendSms(
      process.env.RELAXATION_HANDLER_NUMBER,
      `Deleted Relaxation: ${id}`
    );

    //store the relaxation
    const relaxation = await Relaxation.deleteRelaxation(id);
    return relaxation;
  }
};
