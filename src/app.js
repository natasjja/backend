import * as express from 'express';
import { getLatlonFromPostcode } from './services/postcodeService';

const app = express();

app.get('/locations/', async (req, res) => {
  let postcodeQueryString = req.query.postcodes;

  try {
    const result = await getLatlonFromPostcode(postcodeQueryString);

    return res.send(result);
  } catch (err) {
    return res
      .status(400)
      .send('There was an issue fetching your location data', err);
  }
});

export default app;
