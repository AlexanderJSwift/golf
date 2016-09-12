/**
 * Created by alexs on 08-Sep-16.
 */
import { Meteor } from 'meteor/meteor';
import { Seasons } from '../seasons';

Meteor.publish('seasons', () => Seasons.find());
