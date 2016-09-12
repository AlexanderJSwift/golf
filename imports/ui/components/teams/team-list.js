/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Team } from './team.js';

export const TeamList = ({ teams }) => (

    teams.length > 0 ? <ListGroup className="documents-list">
        {teams.map((team) => (
            <Team key={ team._id } team={ team } />
        ))}
    </ListGroup> :
        <Alert bsStyle="warning">No teams yet.</Alert>
);

TeamList.propTypes = {
    seasons: React.PropTypes.array,
};
