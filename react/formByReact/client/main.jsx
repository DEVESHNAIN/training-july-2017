import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
// import Label from '../imports/ui/App.jsx';

Meteor.startup(() => {
  //const element=<Input type="text">;
  // const App =<div>
  //   <Input.lbl name="Name"/>
  //   <Input.inp type="text" placeholder="enter your name" />
  // </div>;

  render(
     <App />,
     document.getElementById('render-target'));

});
