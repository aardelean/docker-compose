import React, {Component, PropTypes} from 'react';

export default class ProductRow extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string
  };

  render() {
    const {name, category} = this.props;
    return <div><span>{name}</span> : <span>{category}</span></div>;
  }
}
