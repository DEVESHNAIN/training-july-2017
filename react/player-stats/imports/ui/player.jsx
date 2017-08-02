import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Task component - represents a single todo item
export default class Player extends Component {
renderOne=() => {
  let fields=this.props.fields;
  return fields.map((item, key) => {
    if((item.key) == "dob") {
      let dob =moment(this.props.player[item.key], "YYYY/MM/DD").format("DD-MMM-YYYY");
      return <td key={key}>{dob}</td>
    }
    else if((item.key) == 'edit'){
      return <td key={key}><Link to={`/edit/${this.props.player._id}`}><input type="button" value="Click to edit"/></Link></td>
    }

    return <td key={key}>{this.props.player[item.key]}</td>
  })
 }

  render = () => {
    return <tr>{this.renderOne()}</tr>
  }

}
