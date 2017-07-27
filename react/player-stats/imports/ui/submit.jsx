import React, { Component } from 'react';
/*
component for submit
takes props-buttonText === the text which will appear on screen
*/
 export  default class Submit extends Component {
   render() {
   return (<button type="submit" >{this.props.buttonText}</button>)
 }
 }
