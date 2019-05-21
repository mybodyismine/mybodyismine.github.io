import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import * as routes from 'routes';

import Home from 'components/@Home';
import Article from 'components/@Articles/@Article';
import Articles from 'components/@Articles';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.ROUTE_ARTICLE} component={Article} />
        <Route path={routes.ROUTE_ARTICLES} component={Articles} />
        <Route path={routes.ROUTE_HOME} component={Home} />
      </Switch>
    );
  }
}
