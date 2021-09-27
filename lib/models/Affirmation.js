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
};

//Instance method
//arr.map(), arr.filter()

//static methods
//Affirmation.insert();
