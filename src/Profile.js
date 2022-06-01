import React, { Component, useState } from 'react'
export default class Profile extends Component {
    person = {fullName: '',
              bio: '', 
              profession: ''
    };

    handlefullName = (e) => {
        this.setState({
            fullName : e.target.value
        });
    };

    handlebio = (e) => {
        this.setState({
            bio : e.target.value
        });
    };

    handleprofession = (e) => {
        this.setState({
            profession : e.target.value
        });
    };

  handleClick=()=>this.setState({fullName:'dhia eddine bachtouli', bio:'checkpoint react state', profession:'FullStack developer' })
  render() {
    return (
      <div>
          <h1>FULLNAME</h1>
          <input value={this.state.fullName} />
          <h1>BIO</h1>
          <input value={this.state.bio}/>
          <h1>PROFESSION</h1> 
          <input value={this.state.profession} />      
      </div>
    )
  }
}
