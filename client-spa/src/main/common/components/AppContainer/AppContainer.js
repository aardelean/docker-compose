import React, {Component, PropTypes} from 'react';
import {asyncConnect} from 'redux-async-connect';

// Here the initial state of app can be filled, like user data
@asyncConnect([{
  promise: () => Promise.resolve()
}])
export default class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const style = require('./AppContainer.scss');
    const {children} = this.props;

    return (
      <div className={style.AppContainer}>
        <header>HEADER</header>

        <div>
          {children}
        </div>

        <footer>FOOTER</footer>
      </div>
    );
  }
}
