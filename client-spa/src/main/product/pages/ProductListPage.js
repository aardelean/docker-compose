import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect';
import {ProductList} from 'main/product/components';
import {loadProducts} from 'main/product/actions';

@asyncConnect([{
  promise: ({store: {dispatch}}) => dispatch(loadProducts())
}])
@connect(state => ({
  products: state.product.list,
  errorMessage: state.product.errorMessage
}), {loadProducts})
export default class ProductListPage extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    errorMessage: PropTypes.string.isRequired,
    loadProducts: PropTypes.func.isRequired
  };

  render() {
    const {products, errorMessage} = this.props;
    return (
      <div>
        <span>{errorMessage}</span>
        <ProductList products={products} />
      </div>
    );
  }
}
