
import { assert } from 'meteor/practicalmeteor:chai';
import { Courses } from './courses.js';

describe('Courses collection', function () {
    it('registers the collection with Mongo properly', function () {
        assert.equal(typeof Courses, 'object');
    });
});
