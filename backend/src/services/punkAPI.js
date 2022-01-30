const axios = require('axios');

const PUNK_API_URL = 'https://api.punkapi.com/v2/beers';

const getBeers = (page = 1, perPage = 10) => axios.get(`${PUNK_API_URL}?page=${page}&per_page=${perPage}`)
  .then(({ data }) => data)
  .catch(() => new Error('Error fetching data from external API.'));

module.exports = getBeers;
