import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Button, Icon, Card, Image, Message, Container } from 'semantic-ui-react';


import { fetchSeriesNames } from '../actions/series';
import { image_url } from '../apikey/apiKey';

class Series extends React.Component {
    componentDidMount() {
        this.props.fetchSeriesNames();
    }

    render() {
      const { series } = this.props;
      
      return series ?
        <Container textAlign='center'> 
          <Message icon>
            <Message.Content>
              <Message.Header>Series you are currently watching</Message.Header>
            </Message.Content>
          </Message>
          <Card.Group>
            {series.map(serie => 
              <Card key={serie.id} centered raised>
                <Image size='medium' src={`${image_url + serie.poster_path}`} />
                <Card.Content>
                  <Card.Header>
                    {serie.original_name}
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui buttons'>
                    <Button animated as={Link} to={`/series/${serie.id}`} positive>
                        <Button.Content visible>Display not watched episodes</Button.Content>
                        <Button.Content hidden>
                          <Icon name='right arrow' />
                        </Button.Content>
                      </Button>
                  </div>
                </Card.Content>
              </Card>
            )}
            </Card.Group>
        </Container>
      : <Container textAlign='center'>
          <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
              <Message.Header>Just one second</Message.Header>
              We are fetching you series for you.
            </Message.Content>
          </Message>
        </Container>
    
    }
}

function mapStateToProps(state) {
  return {
    series: state.series.series
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchSeriesNames}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Series)