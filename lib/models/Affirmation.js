const pool = require('../utils/pool');

module.exports = class Affirmation {
  id;
  quote;

  constructor(row) {
    this.id = row.id;
    this.quote = row.quote;
  }

  static async insert({ quote }) {
    const { rows } = await pool.query(
      'INSERT INTO affirmations (quote) VALUES ($1) RETURNING *',
      [quote]
    );
    return new Affirmation(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM affirmations');
    return rows.map((row) => {
      return new Affirmation(row);
    });
  }

  static async getAffirmation(id) {
    const { rows } = await pool.query(
      'SELECT * FROM affirmations WHERE id = ($1)',
      [id]
    );
    return new Affirmation(rows[0]);
  }

  static async patchAffirmation(id, quote) {
    const { rows } = await pool.query(
      'UPDATE affirmations SET quote = ($2) WHERE id = ($1) RETURNING *',
      [id, quote]
    );
    return new Affirmation(rows[0]);
  }

  static async deleteAffirmation(id) {
    const { rows } = await pool.query(
      'DELETE FROM affirmations WHERE id = ($1) RETURNING *',
      [id]
    );
    return new Affirmation(rows[0]);
  }
};

//Instance method
//arr.map(), arr.filter()

//static methods
//Affirmation.insert();
