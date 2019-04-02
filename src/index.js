import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route, BrowserRouter as Router
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const Deconection = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);
ReactDOM.render(
  <Provider store={store}>
    {Deconection}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();