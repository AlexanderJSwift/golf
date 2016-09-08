/**
 * Created by alexs on 08-Sep-16.
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CourseList from '../containers/courses-list.js';
import { AddCourse } from '../components/courses/add-course.js';

export const Courses = () => (
    <Row>
        <Col xs={ 12 }>
            <h4 className="page-header">Courses</h4>
            <AddCourse />
            <CourseList />

        </Col>
    </Row>
);
