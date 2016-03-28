import {expect} from 'chai';
import {reducer} from './../reducer';
import * as actionTypes from './../actionTypes';

describe('GIVEN there is a product reducer', () => {
  let currentState = reducer();

  it('SHOULD have an empty list in the default state',
    () => expect(currentState.list).to.deep.equal([]));

  describe('WHEN products are not fetched with success', () => {
    let action = {
      type: actionTypes.PRODUCTS_GET_ERROR
    };
    beforeEach(() => currentState = reducer(currentState, action));

    it('SHOULD have an error message on the state',
      () => expect(currentState.errorMessage).to.equal('products did not load'));
  });

  describe('WHEN products are fetched with success', () => {
    let action = {
      type: actionTypes.PRODUCTS_GET_SUCCESS,
      result: [{ name: 'foo', category: 'bar'}]
    };
    beforeEach(() => currentState = reducer(currentState, action));

    it('SHOULD have a product with name foo',
      () => expect(currentState.list[0].name).to.equal('foo'));

    it('SHOULD have a product with category bar',
      () => expect(currentState.list[0].category).to.equal('bar'));
  })
});