/**
 * Created by alexs on 08-Sep-16.
 */
import React from 'react';
import ReactDom from 'react-dom'
import { form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertPlayer } from '../../../api/players/methods';

var PlayerForm = React.createClass({
    render: function()
    {
        return (
            <form className="PlayerForm" onSubmit={ this.handleSubmit }>
                <FormGroup>
                    <input
                        type="text"
                        ref="playerName"
                        placeholder="Type a player name and press enter..."
                    />
                    <input
                        type="text"
                        ref="playerImage"
                        placeholder="Type an image location and press enter"
                    />
                </FormGroup>
                <Button type="submit" bsStyle="success" block>Submit</Button>
            </form>
        );

    }

});

