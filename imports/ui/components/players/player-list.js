/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Player } from './player.js';

export const PlayersList = ({ players }) => (

    players.length > 0 ? <ListGroup className="documents-list">
        {players.map((player) => (
            <Player key={ player._id } player={ player } />
        ))}
    </ListGroup> :
        <Alert bsStyle="warning">No players yet.</Alert>
);

console.log(typeof (PlayersList));

PlayersList.propTypes = {
    players: React.PropTypes.array,
};
