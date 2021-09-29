const pool = require('../utils/pool');

module.exports = class Activity {
  id;
  exercise;
  dailyDuration;

  constructor(row) {
    this.id = row.id;
    this.exercise = row.exercise;
    this.dailyDuration = row.daily_duration;
  }

  static async insert(exercise, dailyDuration) {
    const { rows } = await pool.query(
      'INSERT INTO activities (exercise, daily_duration) VALUES ($1, $2) RETURNING *',
      [exercise, dailyDuration]
    );
    return new Activity(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM activities');
    return rows.map((row) => {
      return new Activity(row);
    });
  }

  static async getActivity(id) {
    const { rows } = await pool.query(
      'SELECT * FROM activities WHERE id = ($1)',
      [id]
    );
    return new Activity(rows[0]);
  }

  static async patchActivity(id, exercise) {
    const { rows } = await pool.query(
      'UPDATE activities SET exercise = ($2) WHERE id = ($1) RETURNING *',
      [id, exercise]
    );
    return new Activity(rows[0]);
  }
};
