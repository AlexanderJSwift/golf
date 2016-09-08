import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updatePlayer, removePlayer } from '../../../api/players/methods.js';

const handleUpdatePlayer = (documentId, event) => {
    const title = event.target.value.trim();
    if (title !== '' && event.keyCode === 13) {
        updatePlayer.call({
            _id: documentId,
            update: { title },
        }, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Player updated!', 'success');
            }
        });
    }
};

const handleRemovePlayer = (documentId, event) => {
    event.preventDefault();
    // this should be replaced with a styled solution so for now we will
    // disable the eslint `no-alert`
    // eslint-disable-next-line no-alert
    if (confirm('Are you sure? This is permanent.')) {
        removePlayer.call({
            _id: documentId,
        }, (error) => {
            if (error) {
                Bert.alert(error.reason, 'danger');
            } else {
                Bert.alert('Player removed!', 'success');
            }
        });
    }
};

export const Player = ({ player }) => (
    <ListGroupItem key={ player._id }>
        <Row>
            <Col xs={ 8 } sm={ 10 }>
                <FormControl
                    type="text"
                    defaultValue={ player.title }
                    onKeyUp={ handleUpdateCourse.bind(this, player._id) }
                />
            </Col>
            <Col xs={ 4 } sm={ 2 }>
                <Button
                    bsStyle="danger"
                    className="btn-block"
                    onClick={ handleRemovePlayer.bind(this, player._id) }>
                    Remove
                </Button>
            </Col>
        </Row>
    </ListGroupItem>
);
