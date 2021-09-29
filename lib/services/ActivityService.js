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

  static async getAllActivities() {
    //send text
    await sendSms(process.env.ACTIVITY_HANDLER_NUMBER, 'Got all activities');

    //store the activity
    const activities = await Activity.getAll();
    return activities;
  }

  static async getActivityById(id) {
    //send text
    await sendSms(
      process.env.ACTIVITY_HANDLER_NUMBER,
      `Got a particular activity: ${id}`
    );

    //store the activity
    const activity = await Activity.getActivity(id);
    return activity;
  }

  static async patchActivityById(id, exercise) {
    //send text
    await sendSms(
      process.env.ACTIVITY_HANDLER_NUMBER,
      `Updated a particular activity: ${id} to exercise: ${exercise}`
    );

    //store the activity
    const activity = await Activity.patchActivity(id, exercise);
    return activity;
  }
};
