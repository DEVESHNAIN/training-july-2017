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

       <ul>
         {this.renderPlayers()}
       </ul>
     </div>
   );
 }
 }


export default createContainer(() => {
 return {
   players: Players.find({}).fetch(),
 };
}, Stats);
