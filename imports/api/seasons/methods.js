/**
 * Created by alexs on 08-Sep-16.
 */
import { Seasons } from './seasons';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { getInputValue } from '../../modules/get-input-value';

let component;

const getSeasonData = () => ({
    name: getInputValue(component.refs.name),
    startDate: getInputValue(component.refs.startDate)

});

const addSeason = () => {
    const season= getSeasonData();

    Seasons.insert(season, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {

            Bert.alert('Team Added', 'success');
        }
    });
};

export const removeSeason = new ValidatedMethod({
    name: 'Season.methods.removeSeason',
    validate: new SimpleSchema({
            seasonId: {type:String}
        }).validator(),
    run( { seasonId } ) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized', 'You must be logged in to add a new movie!');
        }

        Seasons.remove({_id: seasonId});
    },
});

const validate = () => {
    $(component.refs.addSeason).validate({
        rules: {
            name: {
                required: true,
            },
            startDate:{
                required:true
            }
        },
        messages: {
            name: {
                required: 'Name?',
            },
            startDate:{
                required: 'Please enter a start date'
            }
        },
        submitHandler() { addSeason(); },
    });
};

export const handleAddSeason= (options) => {
    component = options.component;
    console.log(component);
    validate();
};

export const handleRemoveSeason = (options) => {
    component = options.component;
    removeSeason(component._id);
}