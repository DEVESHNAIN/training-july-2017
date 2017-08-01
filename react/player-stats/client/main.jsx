import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddPlayer from '../imports/ui/addPlayer.jsx';
import Stats from '../imports/ui/stats.jsx';
import Edit from '../imports/ui/Edit.jsx';

Meteor.startup(() => {
 const el =  <Router>
                <div>
                  <ul>
                    <li><Link to="/addplayer">Add a new player</Link></li><br></br>
                  </ul>
                  <Route exact path ="/" component={Stats}/>
                  <Route exact path="/addPlayer" component={AddPlayer}/>
                  <Route exact path="/edit/:_id" component={Edit} />
                </div>
              </Router>
  render(
    el,
     document.getElementById('render-target'));

});
