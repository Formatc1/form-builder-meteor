import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Forms = new Mongo.Collection('forms');

Meteor.methods({
  'forms.getOne'(formId) {
    check(formId, String);

    return Forms.findOne(formId);
  }
});
