import React from "react";
import {connect} from 'react-redux';

function Status(props) {
  return (
    <div>
      <p>
        authentication status: {props.authentication ? "Logged In!" : "Logged Out!"}
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  }
}

export default connect(mapStateToProps, null)(Status);
