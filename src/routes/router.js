import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import * as routes from 'routes';

import Home from 'components/@Home';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.ROUTE_HOME} component={Home} />
      </Switch>
    );
  }
}
