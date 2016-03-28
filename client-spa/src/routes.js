import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {AppContainer} from 'main/common/components';
import {ProductListPage} from 'main/product/pages';
import {NotFoundPage} from 'main/common/pages';

export function getRoutes() {
  return (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ProductListPage} />
      <Route path="products" component={ProductListPage} />

      <Route path="*" component={NotFoundPage} status={404} />
    </Route>
  );
}
