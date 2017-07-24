import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { expect } from 'meteor/practicalmeteor:chai';
import {sinon} from 'meteor/practicalmeteor:sinon';
import { SubTasks } from './subTask.js';
import { Tasks } from './tasks.js';
import './tasksMethods.js';
import './subTaskMethods.js';
if (Meteor.isServer) {
  describe('subTasks', () => {
    describe('methods', () => {
      // sinon.stub(Meteor, 'userId',()=>{
      //   return "XJpbymbnyb9yFerHh";
      // });
      // sinon.stub(Meteor, 'user',() => {
      //
      //   return {'username':'tmeasday'};
      //
      // });
      // let taskId=(Tasks.find({}).fetch())[0]._id;
    // let stub1=sinon.stub(Meteor.settings.public.limit);
    // stub1.returns(4);
      let taskIds;
    describe('remove-subtask',()=>{
      beforeEach(() => {
        SubTasks.remove({});
        taskId=SubTasks.insert({
          text: 'test subtask',
          createdAt: new Date(),
          taskIds,

        });
      });
      it('can delete owned subtask', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deletesubTask = Meteor.server.method_handlers['subTasks.remove'];

        // Set up a fake method invocation that looks like what the method expects
        // const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deletesubTask.apply({}, [taskId]);

        // Verify that the method does what we expected
        assert.equal(SubTasks.find().count(), 0);
      });
    });

    describe('insert-subtask', () => {
      beforeEach(() => {
        SubTasks.remove({});
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
          checked:false,
        });
      });
      it('can insert task', () => {
        const insertsubTask= Meteor.server.method_handlers['subTasks.insert'];

      insertsubTask.apply({},['test-text',taskId]);
      assert.equal(SubTasks.find().count(), 1);
    });
});
    describe('dont insert-subtask- if limit cross', () => {
      beforeEach(() => {
        SubTasks.remove({});
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
          checked:false,
        });
        SubTasks.insert({
          text: 'test subtask-1',
          createdAt: new Date(),
          taskId,

        });
        SubTasks.insert({
          text: 'test subtask-2',
          createdAt: new Date(),
          taskId,

        });
        SubTasks.insert({
          text: 'test subtask-3',
          createdAt: new Date(),
          taskId,

        });
        SubTasks.insert({
          text: 'test subtask-4',
          createdAt: new Date(),
          taskId,

        });
      });
      it('will not insert task if limit is full', () => {
        const insertsubTask= Meteor.server.method_handlers['subTasks.insert'];

      // assert.ifError(() => {insertsubTask.apply({},['test-text-6',taskId])});
      assert.throws(() => {
        insertsubTask.apply({}, ['test-text-6',taskId])
      }, "you can't insert now as limit is full ");
      // expect(() => {insertsubTask.apply({},['test-text-6',taskId])}).to.throw("you can't insert now as limit is full ");
    
      });
    });

  });
});
}
