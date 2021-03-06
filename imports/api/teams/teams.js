/**
 * Created by alexs on 08-Sep-16.
 */

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { Players } from '../players/players';
import { Seasons } from '../seasons/seasons';

export const Teams = new Mongo.Collection('Teams');

Teams.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

Teams.deny({
    insert: () => false,
    update: () => false,
    remove: () => false,
});

Teams.schema = new SimpleSchema({
    name:{
        type: 'String',
        label:'Team Name'
    },
    players:{
        type:[String],
        optional:true

    },
    season:{
        type:'String',
        optional:true

    }
});

Teams.attachSchema(Teams.schema);
