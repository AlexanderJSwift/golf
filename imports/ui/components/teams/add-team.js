import React from 'react';
import { FormGroup, FormControl, Row, Col, Button, Input, ControlLabel } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { Link } from 'react-router';
import { handleAddTeam } from '../../../api/teams/methods.js';

export class AddTeam extends React.Component {
    componentDidMount() {
        handleAddTeam({ component: this });
        console.log(this.refs.name.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return <Row>
            <Col xs={ 12 } sm={ 12 } md={ 12 }>
                <form ref="addTeam" className="signup" onSubmit={ this.handleSubmit }>
                    <Row>
                        <Col xs={ 6 } sm={ 6 } md={ 6 }>
                            <Row>
                                <FormGroup>
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl
                                        type="text"
                                        ref="name"
                                        name="name"
                                        placeholder="Team Name"
                                    />
                                </FormGroup>
                            </Row>
                        </Col>

                    </Row>
                    <Button type="submit" bsStyle="success">Add Team</Button>
                </form>
            </Col>
        </Row>;
    }
}
