/**
 * Created by alexs on 08-Sep-16.
 */
import { Players } from './players';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { getInputValue } from '../../modules/get-input-value';

let component;

const getPlayerData = () => ({
    name: getInputValue(component.refs.name),
    image: getInputValue(component.refs.image),
    handicap: getInputValue(component.refs.handicap)

});

const addPlayer = () => {
    const player = getPlayerData();

    Players.insert(player, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {

            Bert.alert('Player Added', 'success');
        }
    });
};

export const removePlayer = (_id) => {

    Players.remove(_id, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {

            Bert.alert('Player Removed', 'success');
        }
    });
};

const validate = () => {
    $(component.refs.addPlayer).validate({
        rules: {
            name: {
                required: true,
            },
            image: {
                required: false,
            },
            handicap: {
                required: false,
            }

        },
        messages: {
            name: {
                required: 'Name?',
            },
        },
        submitHandler() { addPlayer(); },
    });
};

export const handleAddPlayer = (options) => {
    component = options.component;
    validate();
};
