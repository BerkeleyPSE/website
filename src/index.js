import React from 'react';
import ReactDOM from 'react-dom';

// node modules
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// components
// import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import ScrollToTop from './containers/ScrollToTop';
import rootReducer from './reducers/index.js';
import './styles/index.css';
import './styles/box-sizing.css';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
let history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
