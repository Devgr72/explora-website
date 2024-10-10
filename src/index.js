import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from './store'; // Import your configured Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrap your app in Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
