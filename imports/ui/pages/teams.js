/**
 * Created by alexs on 08-Sep-16.
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TeamList from '../containers/teams-list.js';
import { AddTeam } from '../components/teams/add-team.js';

export const Teams = () => (
    <Row>
        <Col xs={ 12 }>
            <h4 className="page-header">Teams</h4>
            <AddTeam/>
            <TeamList />

        </Col>
    </Row>
);
