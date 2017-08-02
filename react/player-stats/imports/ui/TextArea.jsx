import React, { Component } from 'react';

 export  default class TextArea extends Component {

render() {
  return (<textarea rows='3' cols='20' defaultValue={this.props.value} ref={(input) => { this.area = input; }} ></textarea>);

}
}
