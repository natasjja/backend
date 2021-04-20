let mockGet = jest.fn();

import { getLatlonFromPostcode } from '../app';

jest.mock('../postcodes.js', () => ({
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
    const latlon = await getLatlonFromPostcode(['bs84tt']);

    expect(latlon).toEqual([{ latitude: 51.450634, longitude: -2.611497 }]);
  });
  test('it should return an array of latlon for multiple postcodes', async () => {
    const data = {
      result: [
        { result: { latitude: 51.450634, longitude: -2.611497 } },
        { result: { latitude: 51.519052, longitude: -0.148103 } },
        { result: { latitude: 51.538614, longitude: -0.14206 } }
      ]
    };

    mockGet.mockResolvedValue(data);
    const latlon = await getLatlonFromPostcode(['bs84tt', 'W1G 8TB', 'NW10NE']);

    expect(latlon).toEqual([
      { latitude: 51.450634, longitude: -2.611497 },
      { latitude: 51.519052, longitude: -0.148103 },
      { latitude: 51.538614, longitude: -0.14206 }
    ]);
  });
});
