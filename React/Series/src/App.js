import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSeriesNames } from './actions/series';
import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.fetchSeriesNames();
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
