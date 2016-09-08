/**
 * Created by alexs on 08-Sep-16.
 */
import { composeWithTracker } from 'react-komposer';
import { Courses } from '../../api/courses/courses.js';
import { CoursesList } from '../components/courses/course-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('courses');
    if (subscription.ready()) {
        const courses = Courses.find().fetch();
        onData(null, { courses });
    }
};

export default composeWithTracker(composer, Loading)(CoursesList);
