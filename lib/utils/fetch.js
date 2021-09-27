const fetch = require('node-fetch');
const url = 'https://www.affirmations.dev';

const fetchAffirmation = async () => {
  const http = await fetch(url);
  return http.json();
};

module.exports = fetchAffirmation;
