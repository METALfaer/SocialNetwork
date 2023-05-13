import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType  = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = '/dialog/1' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}