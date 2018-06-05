import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./components/pages/Home";
import SignIn from "./components/SignIn";
import Bachelors from "./components/pages/Schools/Bachelors";
import Associates from "./components/pages/Schools/Associates";
import Fun from "./components/pages/fun/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bachelors" component={Bachelors} />
          <Route exact path="/associates" component={Associates} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
