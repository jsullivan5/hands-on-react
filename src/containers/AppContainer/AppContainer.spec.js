import { mapStateToProps, mapDispatchToProps } from './AppContainer';
import { characterActions } from '../../actions/actions';

describe('AppContainer', () => {
  describe('mapStateToProps', () => {
    it('should return state', () => {
      const mockState = {
        characters: {
          some: 'characters',
        },
        apropos: {
          random: 'stuff',
        },
      };
      const { characters: expectedState } = mockState;

      expect(mapStateToProps(mockState)).toEqual({ characters: expectedState });
    });
  });
  describe('mapDispatchToProps', () => {
    it('should dispatch correct actions', () => {
      const mockDispatch = jest.fn();
      const expectedKeys = Object.keys(characterActions);
      const mapDispatchToPropsKeys = Object.keys(
        mapDispatchToProps(mockDispatch)
      );

      expect(mapDispatchToPropsKeys).toEqual(expectedKeys);
    });
  });
});
