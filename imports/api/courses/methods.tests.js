/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { Courses } from './courses.js';
import { insertCourse, updateCourse, removeCourse} from './methods.js';

describe('Courses methods', function () {
    beforeEach(function () {
        if (Meteor.isServer) {
            resetDatabase();
        }
    });

    it('inserts a document into the Courses collection', function () {
        insertCourse.call({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
        const getCourse = Courses.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
        assert.equal(getCourse.title, 'You can\'t arrest me, I\'m the Cake Boss!');
    });

    it('updates a document in the Courses collection', function () {
        const { _id } = Factory.create('player');

        updateCourse.call({
            _id,
            update: {
                title: 'You can\'t arrest me, I\'m the Cake Boss!',
            },
        });

        const getCourse = Courses.findOne(_id);
        assert.equal(getPlayer.title, 'You can\'t arrest me, I\'m the Cake Boss!');
    });

    it('removes a document from the Courses collection', function () {
        const { _id } = Factory.create('course');
        removeCourse.call({ _id });
        const getCourse = Courses.findOne(_id);
        assert.equal(getCourse, undefined);
    });
});
