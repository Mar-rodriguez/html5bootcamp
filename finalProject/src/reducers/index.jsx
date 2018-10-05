import { combineReducers } from 'redux';

import playlistReducer from './playListReducer';
import tokenReducer from './tokenReducer';
import mainReducer from './mainReducer';
import userReducer from './userReducer';
import trackReducer from './tracksReducer';

export default combineReducers({
  playlistReducer,
  tokenReducer,
  mainReducer,
  userReducer,
  trackReducer
});
