/**
 * Created by alexs on 08-Sep-16.
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SeasonList from '../containers/season-list';
import { AddSeason } from '../components/seasons/add-season';

export const Seasons = () => (
    <Row>
        <Col xs={ 12 }>
            <h4 className="page-header">Seasons</h4>
            <AddSeason />
            <SeasonList />

        </Col>
    </Row>
);
