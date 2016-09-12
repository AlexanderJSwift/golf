import React from 'react';
import { FormGroup, FormControl, Row, Col, Button, Input, ControlLabel} from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { Link } from 'react-router';
import { handleAddPlayer } from '../../../api/players/methods.js';

export class AddPlayer extends React.Component {
    componentDidMount() {
        handleAddPlayer({ component: this });
        console.log(this.refs.name.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return <Row>
            <Col xs={ 12 } sm={ 12 } md={ 12 }>
                <form ref="addPlayer" className="signup" onSubmit={ this.handleSubmit }>
                    <Row>
                        <Col xs={ 6 } sm={ 6 } md={ 6 }>
                            <Row>
                                <FormGroup>
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        ref="name"
                                        name="name"
                                        placeholder="Player Name"
                                    />
                                </FormGroup>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <ControlLabel>Image</ControlLabel>
                                    <FormControl
                                        type="text"
                                        ref="image"
                                        name="image"
                                        placeholder="Add Image URL"
                                    />
                                </FormGroup>
                            </Row>
                        </Col>
                        <Col xs={ 6 } sm={ 6 } md={ 6 }>
                            <Row>
                                <FormGroup>
                                    <ControlLabel>Handicap</ControlLabel>
                                    <FormControl
                                        type="number"
                                        ref="handicap"
                                        name="name"
                                        placeholder="Handicap"
                                    />
                                </FormGroup>
                            </Row>
                        </Col>
                    </Row>
                    <Button type="submit" bsStyle="success">Add Player</Button>
                </form>
            </Col>
        </Row>;
    }
}
