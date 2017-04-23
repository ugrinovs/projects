import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchAllTrafostanice } from '../../actions/trafostaniceActions';
import Dropdown from '../nav/Dropdown';
import './Grad.css'

class Grad extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      caretCSS: 'fa-caret-down',
      trafostanica: []
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentWillMount() {
    const { grad, trafostanice } = this.props;
    this.props.fetchAllTrafostanice();
  }

  componentWillReceiveProps(nextProps) {
    const { grad, trafostanice } = nextProps;
    this.setState({
      trafostanica: _.filter(trafostanice, trafostanica => trafostanica.grad_id === grad._id)
    });
  }

  toggleDropdown(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      caretCSS: !this.state.dropdownOpen ? 'fa-caret-up' : 'fa-caret-down'
    });
    e.preventDefault();
  }

  countTrafostanica(volt) {
    const filtered = _.filter(this.state.trafostanica, trafo => trafo.voltaza === volt);
    return filtered.length;
  }
  render() {
    const { grad } = this.props;
    const { dropdownOpen, caretCSS } = this.state;
    return (
      <li className="collection-item collection-item-link">
        <a className="collection-link" href="#" onClick={this.toggleDropdown}>
          {grad.naziv} &nbsp;
          <i className={`fa ${caretCSS}`} aria-hidden="true"> </i>
        </a>
        <Dropdown isOpen={dropdownOpen}>
          <ul className="dropdown-list">
              <li>
                <Link to={`/trafostanice/10/${grad._id}`} href="#">
                  <span className="volt-text-holder">10kV</span>  Pronadjeno: {this.countTrafostanica('10')}
                </Link>
              </li>
              <li>
                <Link to={`/trafostanice/20/${grad._id}`} href="#">
                  <span className="volt-text-holder">20kV</span>  Pronadjeno: {this.countTrafostanica('20')}
                </Link>
              </li>
              <li>
                <Link to={`/trafostanice/30/${grad._id}`} href="#">
                  <span className="volt-text-holder">30kV</span> Pronadjeno: {this.countTrafostanica('30')}
                </Link>
              </li>
              <li>
                <Link to={`/trafostanice/110/${grad._id}`} href="#">
                  <span className="volt-text-holder">110kV</span> Pronadjeno: {this.countTrafostanica('110')}
                </Link>
              </li>
          </ul>
        </Dropdown>
      </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Grad);
