import * as express from 'express';
import { getLatlonFromPostcode } from './services/postcodeService';

const app = express();

app.get('/locations/', async (req, res) => {
  let postcodeQueryParam = req.query.postcodes;
  let postcodes = postcodeQueryParam.split(',');

  try {
    const result = await getLatlonFromPostcode(postcodes);

    return res.send(result);
  } catch (err) {
    return res
      .status(404)
      .send('There was an issue fetching your location data', err);
  }
});

export default app;
