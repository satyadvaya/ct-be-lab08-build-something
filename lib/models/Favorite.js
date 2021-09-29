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

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM favorites');
    return rows.map((row) => {
      return new Favorite(row);
    });
  }

  static async getFavorite(id) {
    const { rows } = await pool.query(
      'SELECT * FROM favorites WHERE id = ($1)',
      [id]
    );
    return new Favorite(rows[0]);
  }

  static async patchFavorite(id, favoriteQuote) {
    const { rows } = await pool.query(
      'UPDATE favorites SET favorite_quote = ($2) WHERE id = ($1) RETURNING *',
      [id, favoriteQuote]
    );
    return new Favorite(rows[0]);
  }

  static async deleteFavorite(id) {
    const { rows } = await pool.query(
      'DELETE FROM favorites WHERE id = ($1) RETURNING *',
      [id]
    );
    return new Favorite(rows[0]);
  }
};
