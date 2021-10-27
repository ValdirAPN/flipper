import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}