import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item, Container, Message, Icon } from 'semantic-ui-react';

import { fetchSeriesSeasions } from '../actions/seasonActions';
import { episode_image_url } from '../apikey/apiKey';
import { normalName } from '../common/seriesFunctions';
/**
 * TODO
 * Check if same season
 *  - if same then check check episodes and date
 *  - if not same then display all episodes.
 */
class DisplayShow extends React.Component {

    mapEpisodes(episodes) {
        if(episodes) {
            return episodes.map(episode => 
                <li key={episode}>{episode}</li>
            )
        }
    }

    componentDidMount() {
        const { showInfo } = this.props;
        this.props.fetchSeriesSeasions(showInfo.id, this.findLatestSeason(showInfo))
    }

    findLatestSeason(showInfo) {
        if(showInfo){
            const latestSeason = showInfo.seasons.reduce((maxSeason, season) => {
                return Math.max(season.season_number, maxSeason);
            }, -1)
            return latestSeason;
        }
    }

    findLatestWatched() {
        const { watchedEpisodes, showInfo } = this.props;
        const episodeNumbers = watchedEpisodes.map(episode => {
            return normalName(episode, showInfo.original_name);
        });

        const episodeNames = episodeNumbers.filter(episode => {
            return episode !== false;
        })
        
        if(episodeNames) {
            const latestEpisodeWatched = episodeNames.reduce((maxEpisode, episode) => {
                return Math.max(findEpisodeNumber(episode), maxEpisode);
            }, -1)
            return latestEpisodeWatched;
        }

        function findEpisodeNumber(episode) {
            if(episode) {
                const indexAfterE = episode.indexOf("E") + 1;
                const charAfterE = episode[indexAfterE];
                if(charAfterE !== 0) {
                    return parseInt(episode.substring(indexAfterE, indexAfterE + 2), 10);
                } else {
                    return parseInt(episode[indexAfterE + 1], 10);
                }
            }
        }
    }

    shouldRenderSeasons() {
        const { seasons } = this.props;
        if(seasons) {
            return seasons.episodes.map(episode => {
                return <li key={episode.id} >{episode.episode_number}</li>
            })
        }
    }

    findUnwatched(seasons) {
        let unwatched = [];
        const { episodes } = seasons;
        for(let i = this.findLatestWatched(); i < episodes.length; i++) {
            unwatched.push(episodes[i]);
        }
        return unwatched;
    }

    checkDate(airDate) {
        let isReleased = Date.now() > Date.parse(airDate);
        return isReleased;
    }

    showUnwatched() {
        const { seasons } = this.props;
        if(seasons){
            const unwatched = this.findUnwatched(seasons);
            const unwatchedEpisodes = unwatched.map(notWatched => {
                return (
                    this.checkDate(notWatched.air_date) &&
                    <Item key={notWatched.id}>
                        <Item.Image size='medium' src={`${episode_image_url}${notWatched.still_path}`} bordered />

                        <Item.Content>
                            <Item.Header as='a'>{notWatched.name}</Item.Header>
                            <Item.Extra>Episode: {notWatched.episode_number}</Item.Extra>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                {notWatched.overview ? notWatched.overview : "There is no description at the moment."}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                )
            })
            return unwatchedEpisodes;
        }
    }

    
    render() {
        this.showUnwatched();
        const { showInfo } = this.props;
        const unwatchedEpisodes = this.showUnwatched();
        return(
            <Container>
                <Message icon>
                    <Icon name='browser'/>
                    <Message.Content>
                    <Message.Header>{showInfo.original_name}</Message.Header>
                        <p>Air date: {showInfo.first_air_date}</p>
                        <p>Episodes not yet watched in {this.findLatestSeason()} season:</p>
                    </Message.Content>
                </Message>
                <Item.Group divided>
                    {unwatchedEpisodes && unwatchedEpisodes[0] ? unwatchedEpisodes : 
                        <Message icon>
                            <Icon.Group size='huge'>
                                <Icon name='tasks' className="task" />
                                <Icon name='warning' className="warning circle" color="yellow" corner />
                            </Icon.Group>
                            <Message.Content>
                            <Message.Header>
                                Currently there are no new episodes.                                
                            </Message.Header>
                            </Message.Content>
                        </Message>}
                </Item.Group>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        seasons: state.series.seasons
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchSeriesSeasions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayShow);