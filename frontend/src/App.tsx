import React from "react";
import Index from "./pages/Index";
import Register from "./pages/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/" component={Index}></Route>
      </Switch>
    </Router>
  );
}

export default App;
