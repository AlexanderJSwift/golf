/**
 * Created by alexs on 08-Sep-16.
 */
import { composeWithTracker } from 'react-komposer';
import { Teams } from '../../api/teams/teams.js';
import { TeamList } from '../components/teams/team-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('teams');
    if (subscription.ready()) {
        const teams = Teams.find().fetch();
        onData(null, { teams });
    }
};

export default composeWithTracker(composer, Loading)(TeamList);
