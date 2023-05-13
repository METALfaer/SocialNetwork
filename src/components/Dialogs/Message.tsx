import s from "./Dialogs.module.css";
import React from "react";

export type MessagesType = {
    id: number
    message: string
}
export const Message = (props: MessagesType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}