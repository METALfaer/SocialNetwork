import React from 'react';
import {sendMessageCreator, StateDialogsPageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux"
import {StoreType} from "../../redux/redux-store";
import WithAuthRedirect from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: StateDialogsPageType
}
type MapDispatchToPropsType = {
    //updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody:any) => void
}
const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
       /* updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },*/
        sendMessage: (newMessageBody:any) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

/*let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default DialogsContainer*/


/*const DialogItem = (props: any) => {
    let path = '/dialog/1' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}*/
/*const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}*/
/*export type DialogItemType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}*/


/*export const DialogsContainer = (props: DialogsType) => {

    /!*let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }*!/


    return (
        <Consumer>
            {
                (store) => {
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    const onNewMessageChange = (body: any) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogsPage={store.getState().dialogsPage}
                    />
                }
            }
        </Consumer>
    );
};*/

