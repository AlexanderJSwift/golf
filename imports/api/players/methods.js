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

export const removePlayer = new ValidatedMethod({
    name: 'Player.methods.removePlayer',
    validate: new SimpleSchema({
            playerId: {type:String}
        }).validator(),
    run( { playerId } ) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized', 'You must be logged in to add a new movie!');
        }

        Players.remove({_id: playerId});
    },
});

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
    console.log(component);
    validate();
};

export const handleRemovePlayer = (options) => {
    component = options.component;
    removePlayer(component._id);
}