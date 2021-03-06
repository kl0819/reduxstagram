import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import  { browserHistory } from 'react-router';

// Import root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// Create object for the default data
const defaultState = {
  posts,
  comments
};

// enhance the store (redux chrome extension)
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  }) 
}

export default store; 