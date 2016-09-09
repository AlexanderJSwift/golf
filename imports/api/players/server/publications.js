/**
 * Created by alexs on 08-Sep-16.
 */
import { Meteor } from 'meteor/meteor';
import { Players } from '../players';

Meteor.publish('players', () => Players.find());
