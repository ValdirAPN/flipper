import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Dashboard from './pages/Dashboard/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
