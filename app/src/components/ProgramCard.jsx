import React from "react";
import "./ProgramCard.css";

function ProgramCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="http://lorempixel.com/200/200" alt="school image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="http://lorempixel.com/200/200" alt="map image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.schoolname}</p>
            <p className="subtitle is-6">
              {props.degreerealm}
              <br />Degree:<br />
              {props.degreetype}
              <br />
              Tuition:
              <br />
              {props.tuition}
            </p>
          </div>
        </div>
        <div className="content">
          {props.summary}
          <a href={props.website}>See More!</a>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
