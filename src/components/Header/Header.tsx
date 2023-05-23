import logo from "../../logo.svg";
import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth?: boolean
    login: string | null
    logOut: () => void
}

export const Header = (props: HeaderType) => {

    return <header className={s.header}>
        <img src={logo} className={s.App_logo} alt="logo"/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logOut}>logOut</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}