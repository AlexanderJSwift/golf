/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Course } from './course.js';

export const CoursesList = ({ courses }) => (
    courses.length > 0 ? <ListGroup className="documents-list">
        {courses.map((doc) => (
            <Course key={ doc._id } document={ doc } />
        ))}
    </ListGroup> :
        <Alert bsStyle="warning">No courses yet.</Alert>
);

CoursesList.propTypes = {
    documents: React.PropTypes.array,
};
