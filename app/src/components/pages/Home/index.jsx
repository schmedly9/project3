import React from "react";
import { Link } from "react-router-dom";
import index from "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          <h1 className="title">Welcome To AZ College Finder</h1>
        </div>
        <div className="checkout has-text-centered">
          <h3 className="title is-3">Select your program!</h3>
          <div className="control has-text-centered">
            <button className="button">
              <Link to="/bachelors">4 Year</Link>
            </button>
            <button className="button">
              <Link to="/associates">2 Year</Link>
            </button>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
