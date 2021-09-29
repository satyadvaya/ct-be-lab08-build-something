const Activity = require('../models/Activity.js');
const { sendSms } = require('../utils/twilio');

module.exports = class ActivityService {
  //send a text and store the activity
  static async createActivity({ exercise, dailyDuration }) {
    //send text
    await sendSms(
      process.env.ACTIVITY_HANDLER_NUMBER,
      `New activity received: ${(exercise, dailyDuration)}`
    );

    //store the activity
    const activity = await Activity.insert(exercise, dailyDuration);
    return activity;
  }
};
