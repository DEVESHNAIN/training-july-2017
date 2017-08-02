import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer }  from 'meteor/react-meteor-data';
import { Players } from '../api/player.js';
import Player  from './player.jsx';

class Stats extends Component {
  renderPlayers = (fields) => {
    return this.props.players.map((player) => (
      <Player key={player._id} player={player} fields={fields}/>
    ));
  }
  renderTitle = (fields) => {
    return fields.map((item, key) => {
      return <th key={key}>{[item.value]}</th>
    })
  }

  render = () => {
    const fields = [{key: 'firstName', value: "First Name"},
     {key: 'lastName', value: "Last Name"},
     {key: 'gender', value: "Gender"},
     {key: 'dob', value: "Date of Birth"},
     {key: 'birthPlace', value: "Place of birth"},
     {key: 'email', value: "Email Address"},
     {key: 'contactNo', value: "Contact No"},
     {key: 'about', value: "About"},
     {key: 'role', value: "Player role"},
     {key: 'run', value: "Runs scored"},
     {key: 'wickets', value: "Wickets taken"},
     {key:'edit', value:'Edit button'}
   ];


   return (
     <div className="container">

       <header>
         <h1>players detail</h1>
       </header>
       <table>
         <tbody>
         <tr>
           {this.renderTitle(fields)}
         </tr>
         {this.renderPlayers(fields)}
       </tbody>
       </table>
     </div>
   );
 }
 }

export default createContainer(() => {
  Meteor.subscribe('players');
 return {
   players: Players.find({}).fetch(),
 };
}, Stats);
