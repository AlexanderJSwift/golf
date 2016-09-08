/**
 * Created by alexs on 08-Sep-16.
 */
import { composeWithTracker } from 'react-komposer';
import { Players } from '../../api/players/players';
import { PlayersList} from '../components/players/player-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('players');
    if (subscription.ready()) {
        const players = Players.find().fetch();
        onData(null, { players });
    }
};

export default composeWithTracker(composer, Loading)(PlayersList);
