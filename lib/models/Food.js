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

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM foods');
    return rows.map((row) => {
      return new Food(row);
    });
  }

  static async getFood(id) {
    const { rows } = await pool.query('SELECT * FROM foods WHERE id = ($1)', [
      id,
    ]);
    return new Food(rows[0]);
  }

  static async patchFood(id, plant) {
    const { rows } = await pool.query(
      'UPDATE foods SET plant = ($2) WHERE id = ($1) RETURNING *',
      [id, plant]
    );
    return new Food(rows[0]);
  }

  static async deleteFood(id) {
    const { rows } = await pool.query(
      'DELETE FROM foods WHERE id = ($1) RETURNING *',
      [id]
    );
    return new Food(rows[0]);
  }
};
