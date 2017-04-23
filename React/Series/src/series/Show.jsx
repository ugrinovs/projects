import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTVShow } from '../actions/series';
import DisplayShow from './DisplayShow';

class Show extends React.Component {
    componentDidMount() {
        this.props.fetchTVShow(this.props.params.id)
    }

    displayShow() {
        const { showInfo, watchedEpisodes } = this.props;
        if(!showInfo || "" + showInfo.id !== this.props.params.id) {
            return "no show";
        }
        return <DisplayShow showInfo={showInfo} watchedEpisodes={watchedEpisodes} />;
    }
    render() {
        return(
            <div>
                {this.displayShow()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showInfo: state.series.showInfo,
        watchedEpisodes: state.series.showInfo && state.series.series && state.series.series.filter(show => {
            return show.id === state.series.showInfo.id;
        })[0].watchedEpisodes
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchTVShow
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)