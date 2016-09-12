/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Season } from './season.js';

export const SeasonList = ({ seasons }) => (

    seasons.length > 0 ? <ListGroup className="documents-list">
        {seasons.map((season) => (
            <Season key={ season._id } season={ season } />
        ))}
    </ListGroup> :
        <Alert bsStyle="warning">No seasons yet.</Alert>
);

SeasonList.propTypes = {
    seasons: React.PropTypes.array,
};
