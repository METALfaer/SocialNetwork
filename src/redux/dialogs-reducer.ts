export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

/*export type dialogsPageType={
    dialogsPage:{
        messages: Array<MessagesType>
        dialogs: Array<DialogsType>
        newMessageBody: string
    }
}*/
export type StateDialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
    newMessageBody:any
}

export type ActionTypes = UpdateNewMessageBodyType
    | SendMessageType


/*const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'*/
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState: StateDialogsPageType = {
    messages: [
        {id: 1, message: 'Agu'},
        {id: 2, message: 'AGA'},
        {id: 3, message: 'UIIII'},
    ],
    dialogs: [
        {id: 1, name: 'baby'},
        {id: 2, name: 'Ruslan'},
        {id: 3, name: 'Mariy'},
    ],
}

const dialogsReducer = (state: StateDialogsPageType = initialState, action: ActionTypes) => {

    switch (action.type) {

        /*case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }*/
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}],
            }


        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody:any):SendMessageType => ({type: SEND_MESSAGE,newMessageBody} as const)

/*export const updateNewMessageBodyCreator = (body: string):UpdateNewMessageBodyType => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)*/


export default dialogsReducer