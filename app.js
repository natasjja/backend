import * as express from 'express';
import { getLatlonFromPostcode } from './postcodes';

const app = express();

// TODO:
// Single Postcode:
// Get data from the Postcodes API
// Return the lat/long

// Multiple Postocdes:
// Get data from the Postcodes API
// Return the lat/long for each postcode

app.get('/postcode/:postcode', (req, res) => {
  const postcode = req.params.postcode;
  getLatlonFromPostcode(postcode).then((data) => {
    console.log(data);
    res.send(data);
  });
});

// export async function getLatlonFromPostcode(postcode) {
//   return '51.5074, 0.1278';
// }

export default app;
