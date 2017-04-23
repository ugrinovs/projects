import axios from 'axios';
import { api_key } from '../apikey/apiKey';

export const SERIES_UPDATED = 'SERIES_UPDATED'
export const FETCHED_TV_SHOW = 'FETCHED_TV_SHOW'

function seriesUpdated(series) {
    return {
        type: SERIES_UPDATED,
        series
    }
}

function fetchedTVShow(showInfo) {
    return {
        type: FETCHED_TV_SHOW,
        showInfo
    }
}

export function fetchTVShow(id) {
    return dispatch => {
        const showUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=` + api_key;
        axios.get(showUrl)
        .then(res => dispatch(fetchedTVShow(res.data)));
    }
}

function fetchSeriesFromDB(series, dispatch) {
    let showsToFetch = [];

    series.forEach(showName => {
        showsToFetch.push(fetchShow(showName.show_name));
    });

    var fetchedSeries = axios.all(showsToFetch);

    fetchedSeries.then((resolve) => {
        pullData(resolve, dispatch, series);
    })
}

function fetchShow(show) {
    let url = 'https://api.themoviedb.org/3/search/tv?api_key=';
    const showUrl = url + api_key + '&query=' + show.replace(/ /g, "%20");
    return axios.get(showUrl);
}

function pullData(data, dispatch, series) {
    let fetchedSeries = [];
    data.forEach((res, index) => {
        let seriesFullInfo = Object.assign({}, res.data.results[0], {
            watchedEpisodes: series[index].list_of_episodes
        }); 
        fetchedSeries.push(seriesFullInfo);
    })
    dispatch(seriesUpdated(fetchedSeries));
}

export function fetchSeriesNames() {
    return dispatch => axios
    .get('/api/series')
    .then(res => {
        fetchSeriesFromDB(res.data, dispatch);
    })

}