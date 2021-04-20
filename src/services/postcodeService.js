import { get } from 'lodash';
import { getPostcodeData } from '../utils/postcodes';

const getLatlonFromPostcode = async (postcodeQueryString) => {
  const postcodeArray = postcodeQueryString.split(',');
  const { result } = await getPostcodeData(postcodeArray);

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
