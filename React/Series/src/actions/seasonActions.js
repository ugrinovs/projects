import axios from 'axios';
import { api_key } from '../apikey/apiKey';

export const SERIES_SEASONS_UPDATED = "SERIES_SEASONS_UPDATED";

function updateSeriesSeasons(seasons) {
    return {
        type: SERIES_SEASONS_UPDATED,
        seasons
    }
}

export function fetchSeriesSeasions(id, seasonNumber) {
    return dispatch => {
        const url = `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${api_key}`;
        axios.get(url)
        .then(res => {
            dispatch(updateSeriesSeasons(res.data));
        })
    }

}