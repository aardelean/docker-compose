import React, {Component, PropTypes} from 'react';
import {ProductRow} from 'main/product/components';

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    const {products} = this.props;
    const productRows = products.map((product, index) => {
      return (
        <li key={index}>
          <ProductRow name={product.name} category={product.category} />
        </li>
      );
    });

    return (<ul>{productRows}</ul>);
  }
}
