import React from 'react';
import {connect} from 'react-redux';
import {authenticate} from '../actions';

class ToggleAuth extends React.Component {
  state = {
    name: "tucker"
  }

  render(){
    const authentication = this.props.authentication;
    return (
      <div>
        <button onClick={() => this.props.changeAuth(!authentication)}>Toggle Auth!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {authentication: state.authentication}
)

const mapDispatchToProps = dispatch => (
  {changeAuth(bool){
    dispatch(authenticate(bool));
  }}
)

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAuth);

