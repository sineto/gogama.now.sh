import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './pages/Index';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Index} />
    </Switch>
  );
};

export default Routes;

