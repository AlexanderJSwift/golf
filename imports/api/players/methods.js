/**
 * Created by alexs on 08-Sep-16.
 */
import { Players } from './players';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';
export const insertPlayer = new ValidatedMethod({
    name: 'player.insert',
    validate: new SimpleSchema({
        title: {type: String},
        image: {type: String, optional:true}
    }).validator(),
    run(course) {
        Players.insert(course)
    }
});

export const updatePlayer = new ValidatedMethod({
    name: 'player.update',
    validate: new SimpleSchema({
        _id: {type: String},
        'update.title': {type: String, optional: true},
        'update.image': {type: String, optional: true}
    }).validator(),
    run({_id, update}) {
        Players.update(_id, {$set: update});
    }
});

export const removePlayer = new ValidatedMethod({
    name: 'player.remove',
    validate: new SimpleSchema({
        _id: { type: String },
    }).validator(),
    run({ _id }) {
        Players.remove(_id);
    },
});


rateLimit({
    methods: [
        insertPlayer,
        updatePlayer,
        removePlayer,
    ],
    limit: 5,
    timeRange: 1000,
});
