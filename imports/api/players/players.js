/**
 * Created by alexs on 08-Sep-16.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Players = new Mongo.Collection('Players');

Players.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Players.deny({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Players.schema = new SimpleSchema({
    name:{
        type: 'String',
        label:'Season Name'
    },
    image:{
        type: String,
        label: 'Image of player',
        optional: true
    },
    handicap: {
        type: Number,
        label: 'Season Handicap',
        optional:true
    }
});

Players.attachSchema(Players.schema);
