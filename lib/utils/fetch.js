const fetch = require('node-fetch');
const url = 'https://www.affirmations.dev';

const fetchAffirmation = async () => {
  const http = await fetch(url);
  const { affirmation } = await http.json();
  return affirmation;
};

module.exports = fetchAffirmation;
