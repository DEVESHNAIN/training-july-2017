import React, { Component } from 'react';

 export  default class TextArea extends Component {

render() {
  return (<textarea rows='3' cols='20' ref={(input) => { this.area = input; }} ></textarea>);

}
}
