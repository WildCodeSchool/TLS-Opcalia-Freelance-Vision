import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './Register';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import displayCra from './components/displayCra';
import displayNotedeFrais from './components/displayNoteDeFrais';
import displayFiles from './components/displayFiles';

const store = createStore(
  allReducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/register/:id/:mail" component={Register} />
        <Route path="/tableCra/:id" component={displayCra} />
        <Route path="/tableNoteDeFrais/:id" component={displayNotedeFrais} />
        <Route path="/tableFiles/:id" component={displayFiles} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
