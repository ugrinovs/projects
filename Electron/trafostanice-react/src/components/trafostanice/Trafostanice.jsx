import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchAllTrafostanice } from '../../actions/trafostaniceActions';
import { Link, hashHistory } from 'react-router';
import Back from '../common/Back/Back';

class Trafostanice extends React.Component {
  componentWillMount() {
    const { params } = this.props;
    this.props.fetchAllTrafostanice(params.volt, params.id);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.volt !== nextProps.params.volt || this.props.params.id !== nextProps.params.id) {
      const { params } = nextProps;
      this.props.fetchAllTrafostanice(params.volt, params.id);
    }
  }

   renderTrafostanice(trafostanice) {
     return _.map(trafostanice, trafostanica =>
       <li className="collection-item" key={trafostanica._id}>
           {trafostanica.naziv}
       </li>);
   }
   render() {
     const { trafostanice } = this.props;
     return (
       <div className="mui-panel trafostanice-content">
         <Back />
         {trafostanice.length !== 0
           ? <ul className="collection">{this.renderTrafostanice(trafostanice)}</ul>
           : <div className="no-result-message">
           Nema rezultata</div>}
       </div>
     );
   }
 }

 function mapStateToProps(state) {
   return {
     trafostanice: state.trafostanice
   }
 }

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     fetchAllTrafostanice
   }, dispatch);
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Trafostanice);
