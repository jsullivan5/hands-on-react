import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./jokeHelper', () => Promise.resolve(JSON.stringify([
  { value: 'hahahahaha' },
  { value: 'funny jokes!!!'}
]))

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });
});
