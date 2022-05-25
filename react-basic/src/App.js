import React from "react";
import Navber from "./components/Navbar";
import routes from "./routes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navber />
        <div className="container">
          <Switch>
            {routes.map(route => {
              return (
                <Route key={route.path}
                path={route.path} exact>
                  <route.component />
                </Route>
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
