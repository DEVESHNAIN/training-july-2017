import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import './task.js';
import { Tasks } from '../api/tasks.js';
import './subTaskList.js';

// import 'taskList.html'
import './body.html';
import './subTaskList.html';

Template.uiList.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.uiList.helpers({
  tasks() {
    console.log("inside tasks");
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.headerTemplate.helpers({
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true } }).count();
  },
});

Template.headerTemplate.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call('tasks.insert', text);

    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
   instance.state.set('hideCompleted', event.target.checked);
 },
});