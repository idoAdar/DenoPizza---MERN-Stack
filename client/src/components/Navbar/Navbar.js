import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [burgerState, setBurgerState] = useState(false);

    return (
        <section className={'nav_container'}>
            <div onClick={() => setBurgerState(!burgerState)} className={'burger_container'}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={!burgerState ? 'links_container' : 'links_container openNav'}>
                <li>
                    <h2><i className="fas fa-pizza-slice"></i> DenoPizza</h2>
                </li>
                <li>
                    <NavLink to={'/'} onClick={() => setBurgerState(false)} exact activeClassName={'active'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/join'} onClick={() => setBurgerState(false)} activeClassName={'active'}>Join</NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Navbar;