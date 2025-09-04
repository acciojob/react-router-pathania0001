import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./navigation";
import Home from "./home";
import About from "./about";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
