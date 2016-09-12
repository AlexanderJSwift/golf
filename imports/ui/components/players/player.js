import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updatePlayer } from '../../../api/players/methods.js';


export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.player.name;
        this._id = this.props.player._id;
        this.image = this.props.player.image;
        this.handicap = this.props.player.handicap;

        this.handleRemovePlayer = this.handleRemovePlayer.bind(this)

    }

    handleRemovePlayer(){
        Meteor.call('Player.methods.removePlayer', {
            playerId:this._id
        },(error,response) => {
            if(error) Bert.alert(error.reason, 'danger');
            if(response)console.log(response);
        })
    }
    
    //TODO: FIX REMOVE PLAYER


    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return <ListGroupItem key={ this._id }>
            <Row>
                <form ref="removePlayer" className="signup" onSubmit={ this.handleSubmit }>
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
                        className="btn-block"
                        type = "submit"
                        onClick={this.handleRemovePlayer}>
                        Remove
                    </Button>
                </Col>
                    
            </form>
            </Row>
        </ListGroupItem>
    }
}
