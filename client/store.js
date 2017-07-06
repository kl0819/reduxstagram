import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-history';
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

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store; 