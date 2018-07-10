import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const bookRoute = () => (
  <div>
    <Nav />
    <Books />
  </div>
);


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" exact component={bookRoute} />
        <Route exact path="/books" component={bookRoute} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
