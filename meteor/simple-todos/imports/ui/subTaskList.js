import { Meteor } from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import {SubTasks} from '../api/subTask.js';
import { Tasks } from '../api/tasks.js';
import '../../client/router.js';
import './subTaskList.html';


Template.subTaskList.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();

  Meteor.subscribe('subTasks');
  Meteor.subscribe('parentTask');
});

Template.subTaskList.helpers({
  subTasks() {
    return SubTasks.find({taskId:FlowRouter.current().params.taskIds}, { sort: { createdAt: -1 } });
  }
});
Template.subTaskHeader.helpers({
  parentTask() {
    return ((Tasks.find({_id: FlowRouter.current().params.taskIds}).fetch())[0].text);
  }
})

Template.subTask.helpers({
  taskId() {
    return this._id;
  },
});

Template.subTaskHeader.events({
  'submit.atask'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call('subTasks.insert' , text , FlowRouter.current().params.taskIds);

    // Clear form
    target.text.value = '';
  },
});

Template.subTask.events({
  'click .delete'() {
    Meteor.call('subTasks.remove', this._id);
  },
})
