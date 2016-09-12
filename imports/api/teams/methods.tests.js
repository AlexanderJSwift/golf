/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { Players } from './teams.js';
import { insertPlayer, updatePlayer, removePlayer} from './methods.js';

describe('Players methods', function () {
    beforeEach(function () {
        if (Meteor.isServer) {
            resetDatabase();
        }
    });

    it('inserts a document into the Players collection', function () {
        insertPlayer.call({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
        const getPlayer = Players.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' },
                                            {image: 'This is the image'});
        assert.equal(getPlayer.title, 'You can\'t arrest me, I\'m the Cake Boss!');
        assert.equal(getPlayer.image, 'This is the image');
    });

    it('updates a document in the Team collection', function () {
        const { _id } = Factory.create('player');

        updatePlayer.call({
            _id,
            update: {
                title: 'You can\'t arrest me, I\'m the Cake Boss!',
                image: 'This is the image'
            },
        });

        const getPlayer = Players.findOne(_id);
        assert.equal(getPlayer.title, 'You can\'t arrest me, I\'m the Cake Boss!');
        assert.equal(getPlayer.image, 'This is the image');
    });

    it('removes a document from the Team collection', function () {
        const { _id } = Factory.create('player');
        removePlayer.call({ _id });
        const getPlayer = Players.findOne(_id);
        assert.equal(getPlayer, undefined);
    });
});
