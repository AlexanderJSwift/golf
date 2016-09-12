/**
 * Created by alexs on 08-Sep-16.
 */
import { composeWithTracker } from 'react-komposer';
import { Seasons } from '../../api/seasons/seasons';
import { SeasonList } from '../components/seasons/season-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('seasons');
    if (subscription.ready()) {
        const seasons = Seasons.find().fetch();
        console.log(seasons);
        onData(null, { seasons });
    }
};

export default composeWithTracker(composer, Loading)(SeasonList);
