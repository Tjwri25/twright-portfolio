import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Main";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
    <div>
      

      <Switch>
      <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />

        <Route exact path="/portfolio" component={Portfolio} />

        <Route exact path="/contact" component={Contact} />
  
  
      </Switch>
    </div>
  </Router>
  );
}

export default App;
