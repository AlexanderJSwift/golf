/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertCourse } from '../../../api/courses/methods';

const handleInsertCourse = (event) => {
    const target = event.target;
    const title = target.value.trim();

    if (title !== '' && event.keyCode === 13) {
        insertCourse.call({
            title,
        }, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                target.value = '';
                Bert.alert('Document added!', 'success');
            }
        });
    }
};

export const AddCourse = () => (
    <FormGroup>
        <FormControl
            type="text"
            onKeyUp={ handleInsertCourse }
            placeholder="Type a course title and press enter..."
        />
    </FormGroup>
);
