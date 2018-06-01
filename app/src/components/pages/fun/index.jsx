import React from "react";
import axios from "axios";

class Fun extends React.Component {
  state = {
    users: []
  };

  componentWillMount() {
    axios.get("https://randomuser.me/api/").then(user => {
      this.setState({
        users: user.data.results
      });
      // console.log(user.data.results);
    });
  }

  render() {
    console.log(this.state.users);
    return <p>Testing...</p>;
  }
}

export default Fun;
