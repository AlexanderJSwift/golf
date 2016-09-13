/**
 * Created by alexs on 13-Sep-16.
 */
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { Courses } from '../../ui/pages/courses';
import { Players } from '../../ui/pages/players';
import { Seasons } from '../../ui/pages/seasons';
import { Teams } from '../../ui/pages/teams';

export class AdminNavigation extends React.Component {


    render() {
        return <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Application Name</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>;
    }
}