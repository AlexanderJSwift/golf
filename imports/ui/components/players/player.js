import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updatePlayer, removePlayer } from '../../../api/players/methods.js';


export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.player.name;
        this._id = this.props.player._id;
        this.image = this.props.player.image;
        this.handicap = this.props.player.handicap;

    }
    
    
    //TODO: FIX REMOVE PLAYER


    componentDidMount() {
        console.log(this.refs.name.value);
    }

    render() {
        return <ListGroupItem key={ this._id }>
            <Row>
                <Col xs={ 3 } sm={ 10 }>
                    <FormControl
                        type="text"
                        defaultValue={ this.name }

                    />
                </Col>
                <Col xs={ 3 } sm={ 2 }>
                    <FormControl
                        type="text"
                        defaultValue={ this.image }/>
                </Col>
                <Col xs={ 3 } sm={ 2 }>
                    <FormControl
                        type="text"
                        defaultValue={ this.handicap }/>
                </Col>
                <Col xs={ 3 } sm={ 2 }>
                    <Button
                        bsStyle="danger"
                        className="btn-block">
                        Remove
                    </Button>
                </Col>
            </Row>
        </ListGroupItem>
    }
}
