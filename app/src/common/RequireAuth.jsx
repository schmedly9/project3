import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RequireAuth = ComposedComponent => {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    };

    // Check before components
    componentWillMount() {
      if (!this.props.authentication) {
        this.context.router.history.push("/");
      }
    }
    
    // Compare new props coming in
    componentWillUpdate(nextProps) {
      if (!nextProps.authentication) {
        this.context.router.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      authentication: state.authentication
    };
  };

  return connect(mapStateToProps, null)(Authentication);
};

export default RequireAuth;
