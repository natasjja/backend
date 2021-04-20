import axios from 'axios';

const BASE_URL = 'https://api.postcodes.io/postcodes';

const getPostcodeData = (postcodes) =>
  axios
    .post(`${BASE_URL}`, {
      postcodes: postcodes
    })
    .then((res) => res.data);

export { getPostcodeData };
