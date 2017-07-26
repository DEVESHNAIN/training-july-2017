import React, { Component } from 'react';

 export  default class SelectBox extends Component {

render() {
  return (<select ref={(input) => { this.car = input; }}>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>);
  }
};
