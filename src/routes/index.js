import { Switch, Route } from "react-router-dom";

import NewSale from "../pages/NewSale";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/new-sale">
        <NewSale />
      </Route>
    </Switch>
  );
};

export default Routes;
