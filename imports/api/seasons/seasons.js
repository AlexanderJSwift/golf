/**
 * Created by alexs on 08-Sep-16.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';


export const Seasons = new Mongo.Collection('Seasons');

Seasons.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Seasons.deny({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Seasons.schema = new SimpleSchema({
    name:{
        type: 'String',
        label:'Season Name'
    },

});

Seasons.attachSchema(Seasons.schema);
