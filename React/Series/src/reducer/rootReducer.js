import { combineReducers } from 'redux';
import { SERIES_UPDATED, FETCHED_TV_SHOW } from '../actions/series';
import { SERIES_SEASONS_UPDATED } from '../actions/seasonActions';

const seriesInitialState = {}
export const series = (state = seriesInitialState, action) => {
    switch (action.type) {
        case SERIES_UPDATED:
            return Object.assign({}, state, {
                series: action.series
            });
        case FETCHED_TV_SHOW:
            return Object.assign({}, state, {
                showInfo: action.showInfo
            });
        case SERIES_SEASONS_UPDATED:
            return Object.assign({}, state, {
                seasons: action.seasons
            });
        default:
            return state
    }
}
const rootReducer = combineReducers({
    series
});

export default rootReducer; 