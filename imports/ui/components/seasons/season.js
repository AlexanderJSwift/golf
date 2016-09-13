import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updatePlayer } from '../../../api/players/methods.js';


export class Season extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.season.name;
        this._id = this.props.season._id;

        this.handleRemoveSeason = this.handleRemoveSeason.bind(this)

    }

    handleRemoveSeason(){
        Meteor.call('Season.methods.removeSeason', {
            seasonId:this._id
        },(error,response) => {
            if(error) Bert.alert(error.reason, 'danger');
            if(response)console.log(response);
        })
    }


    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return <ListGroupItem key={ this._id }>
            <Row>
                <form ref="removeSeason" className="signup" onSubmit={ this.handleSubmit }>
                <Col xs={ 3 } sm={ 10 }>
                    <FormControl
                        type="text"
                        defaultValue={ this.name }

                    />

                </Col>
                <Button
                    bsStyle="danger"
                    className="btn-block"
                    type = "submit"
                    onClick={this.handleRemoveSeason}>
                    Remove
                </Button>

                    
            </form>
            </Row>
        </ListGroupItem>
    }
}
