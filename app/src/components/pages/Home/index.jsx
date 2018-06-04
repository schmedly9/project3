import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Program />
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
              <Link to="/2year">2 Year</Link>
            </button>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Home;

const tempData = {
  id: 571,
  major: "Applied Science (Food Service Management) Business",
  degree: "Bachelor of Applied Science",
  degreetype: "Bachelor",
  degreerealm: "Applied Science",
  campus: "ASUT",
  schoolname: "Arizona State University Tempe",
  campusaddress: "Arizona State University Tempe, AZ 85281",
  enrollment: "$51,869",
  tuition: "$10,552",
  summary:
    "The historic ASU Tempe campus offers hundreds of majors that engage undergraduates and graduates in multidisciplinary research and exploration in first-rate laboratories and facilities.",
  photo: "ASUTempePic",
  map: "ASUTempeMap",
  website: "https://campus.asu.edu/tempe"
};

function Program() {
  return (
    <div>
      <p>{tempData.major}</p>
      <p>{tempData.degree}</p>
      <p>{tempData.degreetype}</p>
      <p>{tempData.schoolname}</p>
      <p>{tempData.tuition}</p>
      <p>{tempData.summary}</p>
      <p>{tempData.website}</p>
      <p>{tempData.map}</p>
      <p>{tempData.photo}</p>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="tempData.photo" alt="school image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div classNameName="media-left">
            <figure class="image is-48x48">
              <img src="tempData.map" alt="map image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">tempData.schoolname</p>
            <p className="subtitle is-6" />
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
