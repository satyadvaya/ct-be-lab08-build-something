const pool = require('../utils/pool');

module.exports = class Relaxation {
  id;
  technique;
  timing;

  constructor(row) {
    this.id = row.id;
    this.technique = row.technique;
    this.timing = row.timing;
  }

  static async insert(technique, timing) {
    const { rows } = await pool.query(
      'INSERT INTO relaxations (technique, timing) VALUES ($1, $2) RETURNING *',
      [technique, timing]
    );
    return new Relaxation(rows[0]);
  }
};
