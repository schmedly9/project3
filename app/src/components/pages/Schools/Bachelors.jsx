import React from "react";
import axios from "axios";
import ProgramCard from "../../ProgramCard";

import "./index.css";


class Bachelors extends React.Component {
  state = {
    programs: []
  };

  componentWillMount() {
    axios.get("/api/bachelors").then(({ data }) => {
      this.setState({
        programs: data
      });
    });
  }

  render() {
    const { programs } = this.state;
    return (
      <div className="container programs">
        {programs.map(program => {
          return <ProgramCard {...program} />;
        })}
      </div>
    );
  }
}

export default Bachelors;
