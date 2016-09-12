/**
 * Created by alexs on 08-Sep-16.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Courses = new Mongo.Collection('Courses');

Courses.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Courses.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Courses.schema = new SimpleSchema({
    title:{
        type: String,
        label:'Course Name'
    }
});

Courses.attachSchema(Courses.schema);

