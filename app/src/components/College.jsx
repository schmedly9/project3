import React from 'react';
import axios from 'axios';

class College extends React.Component{
  constructor(){
    super();
    this.state = {
      college: {
        name: ""
      },
      padding: false
    }
  }

  componentWillMount(){
    const name = this.props.match.params.name;
    console.log(name);
    axios.get('/college/' + name).then(res => {
      this.setState({
        college: {
          name: res.data.data
        }
      });
    })
  }

  render(){
    console.log(this.state);
    return(
      <div className={`${this.state.padding ? "padding": ""}`}>
        <p>this is the {this.state.college.name} page!</p>
      </div>
    )
  }
}

export default College;

