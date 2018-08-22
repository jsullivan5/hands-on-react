import charactersReducer, { upvoteCharacter } from './charactersReducer';
import { SET_CHARACTERS, UPVOTE_CHARACTER } from '../../actions/constants';

describe('charactersReducer', () => {
  describe('charactersReducer', () => {
    it('should return initial state', () => {
      expect(charactersReducer(undefined, {})).toEqual([]);
    });
    it('should handle SET_CHARACTERS', () => {
      const expectedPayload = 'correct';
      const mockAction = { type: SET_CHARACTERS, payload: expectedPayload };

      expect(charactersReducer(undefined, mockAction)).toEqual(expectedPayload);
    });
    it('should handle UPVOTE_CHARACTER', () => {
      const mockCharacter = { voteCount: 0 };
      const initialState = [mockCharacter];
      const mockAction = { type: UPVOTE_CHARACTER, payload: mockCharacter };
      expect(charactersReducer(initialState, mockAction)).toEqual([
        {
          voteCount: 1,
        },
      ]);
    });
  });
  describe('upvoteCharacter', () => {
    let mockCharacter1;
    let mockCharacter2;
    let initialState;
    let mockAction;

    beforeEach(() => {
      mockCharacter1 = { voteCount: 0 };
      mockCharacter2 = { voteCount: 1 };
      initialState = [mockCharacter1];
    });

    it('should start voteCount at 1', () => {
      mockAction = { type: UPVOTE_CHARACTER, payload: mockCharacter1 };
      const results = charactersReducer(initialState, mockAction);
      expect(results[0].voteCount).toBe(1);
    });
    it('should increment voteCount', () => {
      mockAction = { type: UPVOTE_CHARACTER, payload: mockCharacter2 };
      initialState = [mockCharacter2];
      const results = charactersReducer(initialState, mockAction);
      expect(results[0].voteCount).toBe(2);
    });
    it('should return characters sorted by upvote value', () => {
      mockAction = { type: UPVOTE_CHARACTER, payload: mockCharacter2 };
      const sortableInitialState = [mockCharacter1, mockCharacter2];
      const results = charactersReducer(sortableInitialState, mockAction);
      expect(results).toEqual(sortableInitialState.reverse());
    });
  });
});
