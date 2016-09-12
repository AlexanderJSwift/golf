
import { assert } from 'meteor/practicalmeteor:chai';
import { Players } from './players.js';

describe('Players collection', function () {
    it('registers the collection with Mongo properly', function () {
        assert.equal(typeof Players, 'object');
    });
});
