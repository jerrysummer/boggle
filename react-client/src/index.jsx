import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/app';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
