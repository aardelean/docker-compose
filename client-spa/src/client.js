import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {ReduxAsyncConnect} from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import {Provider} from 'react-redux';
import {createStore} from 'helpers/redux/createStore';
import {getRoutes} from 'routes';
import ApiClient from 'ApiClient';


injectTapEventPlugin();

const client = new ApiClient();
const store = createStore(browserHistory, client, window.__data);
const history = syncHistoryWithStore(browserHistory, store);
const scrollHistory = useScroll(() => history)();
const destinationElement = document.getElementById('content');

let component = (
  <Router
    render={(props) => <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />}
    history={scrollHistory}>
    {getRoutes(store)}
  </Router>
);
if (__DEVTOOLS__) {
  const {DevTools} = require('main/common/components');
  component = (
    <div>
      {component}
      <DevTools />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  destinationElement
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!destinationElement || !destinationElement.firstChild || !destinationElement.firstChild.attributes || !destinationElement.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}
