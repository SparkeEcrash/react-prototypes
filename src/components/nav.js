import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

const nav = () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item"><NavLink activeClassName="active selected" className="nav-link" exact to="/">Welcome</NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active selected" className="nav-link" to="/our-macarons">Our Macarons</NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active selected" className="nav-link" to="/gift-parties">Gifts & Parties</NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active selected" className="nav-link" to="/contact">Contact</NavLink></li>
        </ul>
    )
}

export default nav;