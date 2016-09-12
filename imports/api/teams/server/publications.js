/**
 * Created by alexs on 08-Sep-16.
 */
import { Meteor } from 'meteor/meteor';
import { Teams } from '../teams';

Meteor.publish('teams', () => Teams.find());
