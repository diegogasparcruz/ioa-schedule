import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './home';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
