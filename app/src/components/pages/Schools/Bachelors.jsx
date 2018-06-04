import React from "react";
import axios from "axios";

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
      <div>
        {programs.map(program => {
          return <p>{program.degree}</p>;
        })}
      </div>
    );
  }
}

export default Bachelors;
