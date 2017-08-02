import React, { Component } from 'react';

export  default class RadioGroup extends Component {
render() {
  return ( <div>
    <input type="radio" name="gender" value="male" ref={(input) => { this.rb1 = input; }} /> Male<br/>
    <input type="radio" name="gender" value="female" ref={(input) => { this.rb2 = input; }}/> Female<br/>
    <input type="radio" name="gender" value="other" ref={(input) => { this.rb3 = input; }}/> Other</div> );
  }
};
