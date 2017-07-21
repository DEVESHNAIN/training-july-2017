import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tasks } from './tasks.js';
export const SubTasks = new Mongo.Collection('SubTasks');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('subTasks', () => {
    return SubTasks.find({});
  });
  
  Meteor.publish('parentTask', () => {
    return Tasks.find({});
  });
};

Meteor.methods({

  'subTasks.insert'(text,taskId) {
    check(text, String);
    let limit = Meteor.settings.public.limit;
    let count = SubTasks.find({taskId}).count();
    let checked = (Tasks.find({_id:taskId}).fetch())[0].checked;
    console.log(checked);
    if(!checked) {
      if(count < limit){
      SubTasks.insert({
        text,
        createdAt: new Date(),
        taskId,
      });
    }
    else {
      window.alert("you can't insert now as limit is full ");
      throw new Meteor.Error("you can't insert now as limit is full ");
    }
  }
  else {
    window.alert("you can't insert now as task is completed");
    throw new Meteor.Error("you can't insert as task is completed ");
  }
  },

  'subTasks.remove'(taskId) {
    check(taskId, String);
    const subtask = SubTasks.findOne(taskId);
    if (!Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    SubTasks.remove(taskId);
  },
});
