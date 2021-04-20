const axios = require('axios');

const BASE_URL = 'https://api.postcodes.io/postcodes';

module.exports = {
  getPostcodeData: (postcodes) =>
    axios
      .post(`${BASE_URL}`, {
        postcodes: postcodes
      })
      .then((res) => res.data)
};
