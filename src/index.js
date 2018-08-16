import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './App/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
