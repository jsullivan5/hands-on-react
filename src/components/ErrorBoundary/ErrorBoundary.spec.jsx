import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('should catch an error and display an error message', () => {
    const error = new Error('Bad Things');
    const BadComponent = () => {
      throw error;
    };
    const errorMessage = 'Crisis Averted';
    const wrapper = mount(
      <ErrorBoundary render={() => <p>{errorMessage}</p>}>
        <BadComponent />
      </ErrorBoundary>
    );
    expect(wrapper.contains(errorMessage)).toBe(true);
    expect(wrapper.state('hasError')).toBe(true);
    expect(wrapper.state('error')).toEqual(error);
  });
});
