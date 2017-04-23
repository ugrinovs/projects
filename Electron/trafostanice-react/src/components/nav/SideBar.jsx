import React from 'react';
import { Link} from 'react-router';
import Dropdown from './Dropdown';
import './Sidebar.css';

class SideBar extends React.Component {
  constructor() {
    super();
    this.ShowDropdown = this.ShowDropdown.bind(this);
    this.state = {
      dropdownOpen: false,
      caretCSS: 'fa-caret-down'
    };
  }

  ShowDropdown(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      caretCSS: !this.state.dropdownOpen ? 'fa-caret-up' : 'fa-caret-down'
    });
    e.preventDefault();
  }

  render() {
    const { dropdownOpen, caretCSS } = this.state;
    return (
      <div id="sidedrawer" className="mui--no-user-select">
        <div id="sidedrawer-brand" className="mui--appbar-line-height">
          <span className="mui--text-title">Trafostanice</span>
        </div>
        <div className="mui-divider"></div>
        <ul>
          <li><a href="#">Pretraga</a></li>
          <li><a href="#" onClick={this.ShowDropdown}>Trafostanice &nbsp;
            <i className={`fa ${caretCSS}`} aria-hidden="true"> </i>
          </a>
          <Dropdown isOpen={dropdownOpen}>
            <ul className="dropdown-list">
                <li><Link to="/trafostanice/20">20kV</Link></li>
                <li><Link to="/trafostanice/30">30kV</Link></li>
                <li><Link to="/trafostanice/110">110kV</Link></li>
                <li><Link to="/trafostanice/220">220kV</Link></li>
            </ul>
          </Dropdown>
          </li>
          <li><a href="#">Gradovi</a></li>
        </ul>
      </div>
    )
  }
}

export default SideBar;
