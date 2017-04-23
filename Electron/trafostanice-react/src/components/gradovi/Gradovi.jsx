import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllGradovi, addGrad } from '../../actions/gradoviActions';
import { Link } from 'react-router';
import Dropdown from '../nav/Dropdown';
import Grad from './Grad';
import './Gradovi.css';

class Gradovi extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  componentWillMount() {
    this.props.fetchAllGradovi();
  }

  renderGradovi(gradovi) {
    return _.map(gradovi, grad =>
      <Grad key={grad._id} grad={grad} />);
  }
  changeState(e) {
      this.setState({
        input: e.target.value
      })
  }

  dodajGrad() {
    this.props.addGrad(this.state.input);
  }

  render() {
    const { gradovi } = this.props;
    return (
      <div className="mui-panel gradovi-content">
        <input type="text" onChange={(e) => this.changeState(e)} value={this.state.input} />
        <button className="mui-btn" onClick={() => this.dodajGrad()}>Dodaj grad</button>
        {gradovi ? <ul className="collection">{this.renderGradovi(gradovi)}</ul> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gradovi: state.gradovi
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllGradovi,
    addGrad
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gradovi);
