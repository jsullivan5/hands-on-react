import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      getCharacters: jest.fn(),
      upvoteCharacter: jest.fn(),
      characters: [
        {
          name: 'Fluke SkyKnocker',
        },
        {
          name: 'Dark Vader',
        },
      ],
    };

    wrapper = shallow(<App {...props} />);
  });

  it('should render with markup', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('CharacterList')).toHaveLength(1);
  });

  it('should call getCharacters on mount', () => {
    expect(props.getCharacters).toHaveBeenCalledTimes(1);
  });
});
