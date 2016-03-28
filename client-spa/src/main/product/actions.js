import * as actionTypes from './actionTypes';

export function loadProducts() {
  return {
    types: [
      actionTypes.PRODUCTS_GET,
      actionTypes.PRODUCTS_GET_SUCCESS,
      actionTypes.PRODUCTS_GET_ERROR
    ],
    promise: (client) => client.get('/products')
      .then(result => result.content.map(product => {
        const category = product.category ? product.category.name : null;
        const name = product.data;
        return {category, name};
      }))
  };
}
