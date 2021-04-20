import { get } from 'lodash';
import { getPostcodeData } from '../utils/postcodes';

const getLatlonFromPostcode = async (postcodes) => {
  const { result } = await getPostcodeData(postcodes);

  const latAndLongs = result.map((location) => {
    const lat = get(location, 'result.latitude', null);
    const long = get(location, 'result.longitude', null);

    return {
      latitude: lat,
      longitude: long
    };
  });

  return latAndLongs;
};

export { getLatlonFromPostcode };
