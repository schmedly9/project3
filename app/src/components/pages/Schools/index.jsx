import React from "react";
import axios from "axios";
  
  class Schools extends React.Component {
    state = {
      programs: []
    };
  
    componentWillMount() {
      axios.get("/api/bachelors").then(user => {
        this.setState({
          bachelors: user.data.results
        });
      });
    }
  
    render() {
      return <p>Testing...</p>;
    }
  };
  



  export default Schools;





