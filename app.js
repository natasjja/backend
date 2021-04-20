import * as express from 'express';
import { getPostcodeData } from './postcodes';

const app = express();

app.get('/locations/', async (req, res) => {
  let postcodeQueryParam = req.query.postcodes;
  let postcodes = postcodeQueryParam.split(',');

  try {
    const result = await getLatlonFromPostcode(postcodes);

    return res.send(result);
  } catch (err) {
    res.status(400).send('There was an issue fetching your location data', err);
  }
});

export async function getLatlonFromPostcode(postcodes) {
  const { result } = await getPostcodeData(postcodes);

  const latAndLongs = result.map((location) => {
    return {
      latitude: location.result.latitude,
      longitude: location.result.longitude
    };
  });

  return latAndLongs;
}

export default app;
