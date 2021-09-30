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

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM relaxations');
    return rows.map((row) => {
      return new Relaxation(row);
    });
  }

  static async getRelaxation(id) {
    const { rows } = await pool.query(
      'SELECT * FROM relaxations WHERE id = ($1)',
      [id]
    );
    return new Relaxation(rows[0]);
  }
};
