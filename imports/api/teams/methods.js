/**
 * Created by alexs on 08-Sep-16.
 */
import { Teams } from './teams';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { getInputValue } from '../../modules/get-input-value';

let component;


const getTeamData = () => ({
    name: getInputValue(component.refs.name),


});

const addTeam = () => {
    const team = getTeamData();

    Teams.insert(team, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {

            Bert.alert('Team Added', 'success');
        }
    });
};

export const removeTeam = new ValidatedMethod({
    name: 'Team.methods.removeTeam',
    validate: new SimpleSchema({
            teamId: {type:String}
        }).validator(),
    run( { teamId } ) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized', 'You must be logged in to add a new movie!');
        }

        Teams.remove({_id: teamId});
    },
});

const validate = () => {
    $(component.refs.addTeam).validate({
        rules: {
            name: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'Name?',
            },
        },
        submitHandler() { addTeam(); },
    });
};

export const handleAddTeam = (options) => {
    component = options.component;
    console.log(component);
    validate();
};

export const handleRemoveTeam = (options) => {
    component = options.component;
    removeTeam(component._id);
}