import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import {StateDialogsPageType} from "../../redux/dialogs-reducer";
import {InjectedFormProps,reduxForm,Field} from "redux-form";

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
    isAuth: boolean | undefined
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id}/>)

    const messagesElements = state.messages.map(m =>
        <Message message={m.message} id={m.id} key={m.id}/>)

    const newMessageBody = state.newMessageBody

    const addNewMessage=(values:any)=>{

    }

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
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea'
                   name='newMessageBody'
                   placeholder='enter your message'/>
            <div>
                <button>Go</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux=reduxForm<FormDataType>({form:'dialogAddMessageForm'})(AddMessageForm)
