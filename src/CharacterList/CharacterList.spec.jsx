import React from 'react';
import { shallow } from 'enzyme';

import CharacterList from './CharacterList';

describe('<CharacterList />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      characters: [
        {
          name: 'Fluke SkyKnocker',
          voteCount: 0,
        },
        {
          name: 'Dark Vader',
          voteCount: 0,
        },
      ],
      upvoteCharacter: jest.fn(),
    };

    wrapper = shallow(<CharacterList {...props} />);
  });

  it('should mount correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render ...Loading when no characters', () => {
    props.characters = [];
    wrapper = shallow(<CharacterList {...props} />);

    expect(wrapper.contains('...Loading')).toBe(true);
  });

  it('should render two characters', () => {
    const charLength = props.characters.length;
    expect(wrapper.find('.character-card')).toHaveLength(charLength);
  });

  it('should call upvoteCharacter onClick', () => {
    expect(props.upvoteCharacter).not.toHaveBeenCalled();
    wrapper
      .find('.character-card')
      .at(0)
      .simulate('click');
    expect(props.upvoteCharacter).toHaveBeenCalled();
  });

  it('should call upvoteCharacter only when enter is pressed', () => {
    const mockEventSuccess = { key: 'Enter' };
    const mockEventFailure = { key: 'tab' };
    const clickableDiv = wrapper.find('.character-card').at(0);

    expect(props.upvoteCharacter).not.toHaveBeenCalled();
    clickableDiv.simulate('keyPress', mockEventFailure);
    expect(props.upvoteCharacter).not.toHaveBeenCalled();

    clickableDiv.simulate('keyPress', mockEventSuccess);
    expect(props.upvoteCharacter).toHaveBeenCalled();
  });
});
