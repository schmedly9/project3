import React from "react";

import "./index.css";

function Home() {
  return (
    <div className="Home">
      <div className="header">
        <h1 className="title">Welcome To AZ College Finder</h1>
      </div>
      <div className="checkout has-text-centered">
        <h3 className="title is-3">Select your program!</h3>
        <form>
          <div class="control has-text-centered">
            <label className="radio">
              <input type="radio" name="program" />
              <span className="description">4 Year</span>
            </label>
            <label className="radio">
              <input type="radio" name="program" />
              <span className="description">2 Year</span>
            </label>
          </div>
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
          <br />
          <button className="button">Submit!</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
