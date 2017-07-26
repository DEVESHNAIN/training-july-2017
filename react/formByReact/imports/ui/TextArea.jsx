import React, { Component } from 'react';

 export  default class TextArea extends Component {

render() {
  return (<textarea ref={(input) => { this.area = input; }} ></textarea>);

}
}
