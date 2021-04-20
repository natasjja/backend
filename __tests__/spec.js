let mockGet = jest.fn();

import { getLatlonFromPostcode } from '../app';

jest.mock('../postcodes.js', () => ({
  getPostcodeData: mockGet
}));

describe('getLatlonFromPostcode', () => {
  const data = {
    result: {
      latitude: 51.450634,
      longitude: -2.611497
    }
  };

  test('it should return latlon for given postcode', async () => {
    mockGet.mockResolvedValue(data);
    const latlon = await getLatlonFromPostcode('bs84tt');

    expect(latlon).toEqual({
      latitude: 51.450634,
      longitude: -2.611497
    });
  });
});
