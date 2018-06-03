import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./components/pages/Home";
import SignIn from "./components/SignIn";
import Schools from "./components/pages/schools/schools";
import Fun from "./components/pages/fun/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/4year" component={Schools} />
          <Route exact path="/2year" component={Fun} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
