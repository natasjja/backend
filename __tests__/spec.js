let mockGet = jest.fn();

import { getLatlonFromPostcode } from '../app';

jest.mock('../postcodes.js', () => ({
  getPostcodeData: mockGet
}));

describe('getLatlonFromPostcode', () => {
  afterEach(() => {
    mockGet.mockClear();
  });

  test('it should return latlon for given postcode', async () => {
    const data = {
      result: {
        latitude: 51.450634,
        longitude: -2.611497
      }
    };

    mockGet.mockResolvedValue(data);
    const latlon = await getLatlonFromPostcode('bs84tt');

    expect(latlon).toEqual({
      latitude: 51.450634,
      longitude: -2.611497
    });
  });

  test('it should return an error for an invalid postcode', async () => {
    const error = {
      response: {
        data: {
          error: 'Invalid postcode'
        }
      }
    };

    mockGet.mockRejectedValue(error);
    const latlon = await getLatlonFromPostcode('1234');

    expect(latlon).toEqual('Invalid postcode');
  });
});
