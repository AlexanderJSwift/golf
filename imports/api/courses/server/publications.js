/**
 * Created by alexs on 08-Sep-16.
 */
import { Meteor } from 'meteor/meteor';
import { Courses } from '../courses';

Meteor.publish('courses', () => Courses.find());
