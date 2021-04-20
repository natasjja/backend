const axios = require('axios');

const BASE_URL = 'https://api.postcodes.io/postcodes/';

module.exports = {
  getPostcodeData: (postcode) =>
    axios.get(`${BASE_URL}/${postcode}`).then((res) => res.data)
};