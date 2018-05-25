import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { authenticate } from "../actions";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post("/signup", this.state).then(res => {
      const token = res.data.token;
      this.props.updateToken(token);
    });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input onChange={this.handleChange} type="text" name="email" />
        <br />
        <label htmlFor="email">Password:</label>
        <input onChange={this.handleChange} type="password" name="password" />
        <button type="submit">Sign In!</button>
        <br />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateToken(token) {
    dispatch(authenticate(token));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);
