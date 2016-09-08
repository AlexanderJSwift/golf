/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Player } from './player.js';

export const PlayersList = ({ players }) => (
    players.length > 0 ? <ListGroup className="documents-list">
        {players.map((doc) => (
            <Player key={ doc._id } document={ doc } />
        ))}
    </ListGroup> :
        <Alert bsStyle="warning">No courses yet.</Alert>
);

PlayersList.propTypes = {
    documents: React.PropTypes.array,
};
