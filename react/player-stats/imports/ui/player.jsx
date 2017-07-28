import React, { Component} from 'react';

// Task component - represents a single todo item
export default class Player extends Component {
  render() {
    return (<div>
    <h1>{this.props.player.firstName} {this.props.player.lastName}</h1>
      <li>Gender : {this.props.player.gender}</li>
      <li>D. O.B : {this.props.player.dob}</li>
      <li>Home Town : {this.props.player.birthPlace}</li>
      <li>Email id : {this.props.player.email}</li>
      <li>Contact No :{this.props.player.contactNo}</li>
      <li>About player :{this.props.player.about}</li>
      <li>Player Role : {this.props.player.role}</li>
      <li>Run scored :{this.props.player.run}</li>
      <li>Wickets taken : {this.props.player.wickets}</li><br></br>
    </div>
    );
  }
}
