import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialog' activeClassName={s.active}>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
    </nav>
}