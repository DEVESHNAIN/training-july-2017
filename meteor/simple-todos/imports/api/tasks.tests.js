/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';
import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = sinon.stub(Meteor, 'userId',()=>{
        return "XJpbymbnyb9yFerHh";
      });
      let username= sinon.stub(Meteor, 'user.username',() => {
        return "tmeasday";

      });
      let taskId;
      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
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
        assert.equal(Tasks.find().count(), 0);
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
  });
});
