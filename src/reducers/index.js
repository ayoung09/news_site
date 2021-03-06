import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: require('./user').default,
  article: require('./article').default,
});

export default rootReducer;
