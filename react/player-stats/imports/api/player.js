import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('players', () => {
    return Players.find();
  });
}
Meteor.methods({
  /* this will insert form data into database*/
  'player.insert'(first,last,gender,dob,birthPlace,email,contactNo,area,role,run,wickets) {
    Players.insert({
      firstName: first,
      lastName: last,
      gender,
      dob,
      birthPlace,
      email,
      contactNo,
      about:area,
      role,
      run,
      wickets,
      createdAt: new Date()
    });
  },
  'player.update'(id,first,last,gender,dob,birthPlace,email,contactNo,area,role,run,wickets) {
    Players.update({_id: id}, {
      $set: {
        firstName: first,
        lastName: last,
        gender,
        dob,
        birthPlace,
        email,
        contactNo,
        about:area,
        role,
        run,
        wickets,
        createdAt: new Date()
      }
    })
  },
  'player.fetchById'(_id) {
  return Players.findOne({_id});

  }
})
