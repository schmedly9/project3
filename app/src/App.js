import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./components/pages/Home";
import SignIn from "./components/SignIn";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
