import { combineReducers } from 'react-redux';

const rootReducer = combineReducers({
  user: require('./user').default,
});

export default rootReducer;
