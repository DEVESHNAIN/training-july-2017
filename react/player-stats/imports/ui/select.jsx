import React, { Component } from 'react';

 export  default class SelectBox extends Component {

render() {
  return (<select ref={(input) => { this.role = input; }}>
    <option value="batsmen">Batsmen</option>
    <option value="bowler">Bowler</option>
    <option value="allrounder">All Rounder</option>

  </select>);
  }
};
