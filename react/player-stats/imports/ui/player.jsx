import React, { Component} from 'react';

// Task component - represents a single todo item
export default class Player extends Component {
  render() {
    return (<tr>
      <td><strong>{this.props.player.firstName}</strong></td>
      <td><strong>{this.props.player.lastName}</strong></td>
      <td>{this.props.player.gender}</td>
      <td>{this.props.player.dob}</td>
      <td>{this.props.player.birthPlace}</td>
      <td>{this.props.player.email}</td>
      <td>{this.props.player.contactNo}</td>
      <td>{this.props.player.about}</td>
      <td>{this.props.player.role}</td>
      <td>{this.props.player.run}</td>
      <td>{this.props.player.wickets}</td><br></br>
    </tr>
    );
  }
}
