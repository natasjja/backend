let mockGet = jest.fn();

import { getLatlonFromPostcode } from '../src/services/postcodeService';

jest.mock('../src/utils/postcodes.js', () => ({
  getPostcodeData: mockGet
}));

describe('getLatlonFromPostcode', () => {
  afterEach(() => {
    mockGet.mockClear();
  });

  test('it should return latlon for a single postcode', async () => {
    const data = {
      result: [{ result: { latitude: 51.450634, longitude: -2.611497 } }]
    };

    mockGet.mockResolvedValue(data);
    const latlon = await getLatlonFromPostcode('bs84tt');

    expect(latlon).toEqual([{ latitude: 51.450634, longitude: -2.611497 }]);
  });
  test('it should return an array of latlon from a multiple postcode query string', async () => {
    const data = {
      result: [
        { result: { latitude: 51.450634, longitude: -2.611497 } },
        { result: { latitude: 51.519052, longitude: -0.148103 } },
        { result: { latitude: 51.538614, longitude: -0.14206 } }
      ]
    };

    mockGet.mockResolvedValue(data);
    const latlon = await getLatlonFromPostcode('bs84tt,W1G 8TB,NW10NE');

    expect(latlon).toEqual([
      { latitude: 51.450634, longitude: -2.611497 },
      { latitude: 51.519052, longitude: -0.148103 },
      { latitude: 51.538614, longitude: -0.14206 }
    ]);
  });

  test('it should return null for latlon of an invalid postcode', async () => {
    const data = {
      result: [
        { result: { latitude: 51.450634, longitude: -2.611497 } },
        { result: null }
      ]
    };

    mockGet.mockResolvedValue(data);
    const latlon = await getLatlonFromPostcode('bs84tt,invalid postcode');

    expect(latlon).toEqual([
      { latitude: 51.450634, longitude: -2.611497 },
      { latitude: null, longitude: null }
    ]);
  });
});
