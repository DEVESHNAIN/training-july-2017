import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer }  from 'meteor/react-meteor-data';
import { Players } from '../api/player.js';
import Player  from './player.jsx';

class Stats extends Component {
  renderPlayers = () => {
    return this.props.players.map((player) => (
      <Player key={player._id} player={player} />
    ));
  }
  render= () => {
   return (
     <div className="container">

       <header>
         <h1>players detail</h1>
       </header>
       <table>
         <tr>
           <th>First Name</th>
           <th>Last name</th>
           <th>Gender</th>
           <th>D. O.B </th>
           <th>Home Town </th>
           <th>Email id </th>
           <th>Contact No </th>
           <th>About player</th>
           <th>Player Role</th>
           <th>Run scored</th>
           <th>Wickets taken</th>
         </tr>
         {this.renderPlayers()}

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
