const pool = require('../utils/pool');

module.exports = class Favorite {
  id;
  username;
  favoriteQuote;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
    this.favoriteQuote = row.favorite_quote;
  }

  static async insert(username, favoriteQuote) {
    const { rows } = await pool.query(
      'INSERT INTO favorites (username, favorite_quote) VALUES ($1, $2) RETURNING *',
      [username, favoriteQuote]
    );
    return new Favorite(rows[0]);
  }
};
