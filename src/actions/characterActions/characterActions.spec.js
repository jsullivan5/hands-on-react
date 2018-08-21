import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setCharacters,
  upvoteCharacter,
  getCharacters,
} from './characterActions';

import {
  SET_CHARACTERS,
  UPVOTE_CHARACTER,
} from '../constants';

describe('characterActions', () => {
  describe('setCharacters', () => {
    it('should return the correct action', () => {
      const mockPayload = 'Luke SkyKnocker';
      expect(setCharacters(mockPayload)).toEqual({
        type: SET_CHARACTERS,
        payload: mockPayload,
      });
    });
  });
  describe('upvoteCharacter', () => {
    it('should return the correct action', () => {
      const mockPayload = ['Luke SkyKnocker', 'Dark Bader'];
      expect(upvoteCharacter(mockPayload)).toEqual({
        type: UPVOTE_CHARACTER,
        payload: mockPayload,
      });
    });
  });
  describe('getCharacters', () => {
    let store;
    const mockStore = configureMockStore([thunk]);
    const mockResponse = (status, statusText, response) =>
      new window.Response(response, {
        status,
        statusText,
        headers: {
          'Content-type': 'application/json',
        },
      });

    beforeEach(() => {
      store = mockStore({});
    });

    it('should return the correct actions', async () => {
      const mockResults = { results: [{ name: 'Luke' }] };

      window.fetch = jest.fn(() =>
        Promise.resolve(mockResponse(200, null, JSON.stringify(mockResults)))
      );

      const expectedActions = [
        {
          payload: [{ name: 'Luke', voteCount: 0 }],
          type: SET_CHARACTERS,
        },
      ];

      await store.dispatch(getCharacters());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
