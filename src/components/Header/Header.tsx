import logo from "../../logo.svg";
import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType={
    isAuth?:boolean
    login: string | null
}
export const Header = (props:HeaderType) => {

    return <header className={s.header}>
        <img src={logo} className={s.App_logo} alt="logo"/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login :  <NavLink to={'/login'}>
                Login
            </NavLink>}

        </div>

    </header>
}