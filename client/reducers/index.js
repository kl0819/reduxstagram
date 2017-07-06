// Handles and update the state/store 
import { combineReducers}  from 'redux';
import { routerReducer } from 'react-router-dom';

import posts from './posts';
import commments from './comments';

const rootReducer = combineReducers({
  posts, 
  comments, 
  router: routerReducer 
});

export default rootReducer;

