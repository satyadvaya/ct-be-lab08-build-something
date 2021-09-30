const pool = require('../utils/pool');

module.exports = class Food {
  id;
  plant;
  meal;

  constructor(row) {
    this.id = row.id;
    this.plant = row.plant;
    this.meal = row.meal;
  }

  static async insert(plant, meal) {
    const { rows } = await pool.query(
      'INSERT INTO foods (plant, meal) VALUES ($1, $2) RETURNING *',
      [plant, meal]
    );
    return new Food(rows[0]);
  }
};
