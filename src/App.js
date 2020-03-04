import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EachFund from "./EachFund";
import SelectedFund from "./SelectedFund";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path='/funds' exact component={EachFund}/> */}
            <Route path="/funds/:id" component={SelectedFund} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
