import * as express from 'express';
import { getPostcodeData } from './postcodes';

const app = express();

// TODO:
// Multiple Postocdes:
// Get data from the Postcodes API
// Return the lat/long for each postcode

app.get('/postcode/:postcode', (req, res) => {
  const postcode = req.params.postcode;
  getLatlonFromPostcode(postcode).then((data) => {
    res.send(data);
  });
});

export async function getLatlonFromPostcode(postcode) {
  const { result } = await getPostcodeData(postcode);
  const { latitude, longitude } = result;

  return { latitude, longitude };
}

export default app;
