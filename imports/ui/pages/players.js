/**
 * Created by alexs on 08-Sep-16.
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PlayerList from '../containers/players-list';
import { AddPlayer } from '../components/players/add-player.js';

export const Players = () => (
    <Row>
        <Col xs={ 12 }>
            <h4 className="page-header">Players</h4>
            <AddPlayer />
            <PlayerList />

        </Col>
    </Row>
);
