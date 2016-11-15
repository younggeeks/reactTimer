import React, {
    Component,
    PropTypes,
} from 'react';

import {IndexLink,Link} from 'react-router'

class Nav extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Geeks Site</li>
                        <li activeClassName="active-link"><IndexLink to="/">Timer</IndexLink></li>
                        <li><Link to="/" activeClassName="active-link">Count Down</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created By <a href="#"><b>Samjunior</b></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;
