/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';
import { Tasks } from './tasks.js';
import './tasksMethods.js';
import './subTaskMethods.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      sinon.stub(Meteor, 'userId',()=>{
        return "XJpbymbnyb9yFerHh";
      });
      sinon.stub(Meteor, 'user',() => {

        return {'username':'tmeasday'};

      });
      let taskId;
    describe('remove',()=>{
      beforeEach(() => {
        Tasks.remove({});
        Tasks.insert({
          text: 'test task-2',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        })
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });

      });
      it('can delete owned task', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];

        // Set up a fake method invocation that looks like what the method expects
        // const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply({}, [taskId]);

        // Verify that the method does what we expected
        assert.equal(Tasks.find({_id:taskId}).count(), 0);

      });
    });


    describe('insert', () => {
      beforeEach(() => {
        Tasks.remove({});
      });
      it('can insert task', () =>{
        const insertTask= Meteor.server.method_handlers['tasks.insert'];

        insertTask.apply({},['test-text']);
        assert.equal(Tasks.find().count(), 1);
      });
    });
    describe('setChecked', ()=>{
      beforeEach(()=>{
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        Tasks.insert({
          text: 'test task-2',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
          checked:true,
        });
       });
      it('can set checked',() => {
          const setChecked = Meteor.server.method_handlers['tasks.setChecked'];
          setChecked.apply({},[taskId,true]);
          assert.equal(Tasks.find({_id:taskId,checked:true}).count(),1);
      });
    });
    describe('setprivate', ()=>{
      beforeEach(()=>{
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
        });
        Tasks.insert({
          text: 'test task-2',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
          checked:true,
          private:false,
        });
       });
      it('can set private',() => {
          const setPrivate= Meteor.server.method_handlers['tasks.setPrivate'];
          setPrivate.apply({},[taskId,true]);
          assert.equal(Tasks.find({_id:taskId,private:true}).count(),1);
      });
    });
  });
});
}
