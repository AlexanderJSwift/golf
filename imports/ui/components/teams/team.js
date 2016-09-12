import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateTeam } from '../../../api/teams/methods.js';


export class Team extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.team.name;
        this._id = this.props.team._id;

        this.handleRemoveTeam = this.handleRemoveTeam.bind(this)

    }

    handleRemoveTeam(){
        Meteor.call('Team.methods.removeTeam', {
            teamId:this._id
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
                <form ref="removeTeam" className="signup" onSubmit={ this.handleSubmit }>
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
                    onClick={this.handleRemoveTeam}>
                    Remove
                </Button>

                    
            </form>
            </Row>
        </ListGroupItem>
    }
}
