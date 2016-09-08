/**
 * Created by alexs on 08-Sep-16.
 */
import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Players = new Mongo.Collection('Players');

Players.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Players.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Players.schema = new SimpleSchema({
    title:{
        type: String,
        label:'Course Name'
    },
    image:{
        type: String,
        label: 'Image of player',
        optional: true
    }
});

Players.attachSchema(Players.schema);

Factory.define('players', Players, {
    title: ()=> faker.hacker.phrase(),
    image: ()=> faker.hacker.phrase(),
});