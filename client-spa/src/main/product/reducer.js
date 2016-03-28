import * as actionTypes from './actionTypes';

const initialState = {
  errorMessage: '',
  list: []
};

export function reducer(state = initialState, action = {}) {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.PRODUCTS_GET_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        list: action.result
      };

    case actionTypes.PRODUCTS_GET_ERROR:
      return {
        ...state,
        list: [],
        errorMessage: 'There was an error loading the products'
      };

    default:
      return state;
  }
}
