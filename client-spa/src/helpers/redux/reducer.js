import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import {reducer as product} from 'main/product/reducer';

export default combineReducers({
  routing,
  reduxAsyncConnect,

  product
});
