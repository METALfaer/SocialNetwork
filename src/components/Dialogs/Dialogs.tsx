import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {StateDialogsPageType} from "../../redux/dialogs-reducer";
import {Login} from "../Login/login";
import { Redirect } from 'react-router-dom';

/*export type LittleDialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}*/


export type DialogsType = {
    updateNewMessageBody: (body: string) => void
    dialogsPage: StateDialogsPageType
    sendMessage: () => void
    isAuth:boolean | undefined
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id}/>)

    const messagesElements = state.messages.map(m =>
        <Message message={m.message} id={m.id} key={m.id}/>)

    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
        //props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

