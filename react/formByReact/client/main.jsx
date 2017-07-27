import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
 const el =  <Router>
                <div>
                  <ul>
                    <li><Link to="/">Home</Link></li><br></br>
                    <li><Link to="/form">Form</Link></li><br></br>
                  </ul>
                  <Route exact path="/form" component={App}/>
                </div>
              </Router>
  render(
    el,
     document.getElementById('render-target'));

});
