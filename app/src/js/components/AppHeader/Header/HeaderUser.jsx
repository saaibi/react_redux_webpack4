import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HeaderUser = ({ menu }) => {
    if (menu === "sidenav") {
        return (
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="/app/public/images/office.jpg" />
                        </div>
                        <Link to="/"><img className="circle" src="/app/public/images/yuna.jpg" /></Link>
                        <a href="#name"><span className="white-text name">Saaibi Florez</span></a>
                        <a href="#email"><span className="white-text email">saaibiflorezhernandez@gmail.com</span></a>
                    </div>
                </li>
                <li><Link to="/results"><i className="material-icons">poll</i>Resultados</Link></li>
                <li><Link to="/login"><i className="material-icons">system_update_alt</i>Logout</Link></li>
            </ul>
        )
    }
    if (menu === "nav") {
        return (
            < ul className="right hide-on-med-and-down" >
                <li><Link to="/results">Resultados</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul >
        );
    }

};

HeaderUser.defaultProps = {
};

HeaderUser.propTypes = {
    menu: PropTypes.oneOf(['nav', 'sidenav'])
};

export default HeaderUser;
