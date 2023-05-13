//import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



/*export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void

    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}*/

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'*/

/*export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'more many', likesCount: 14},
                {id: 2, message: 'want meny many', likesCount: 32}
            ],
            newPostText: 'cacas'
        },
        dialogsPage: {
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
            newMessageBody: ''
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('qwe')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

  /!*  addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this.getState())
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this.getState())
    },*!/

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(this.getState())
    /!*    if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this.getState())
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this.getState())
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this.getState())
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 4, message: body})
            this._callSubscriber(this.getState())
        }*!/
    }
}*/

/*export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})*/
/*export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
} as const)*/


/*export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}*/

/*export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogItemType>
    newMessageBody: string
}*/

//export type SidebarType={}

/*export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:SidebarType
}*/

/*export type NewPostType = {
    id: number
    message: string
    likesCount: number
}*/
/*export type AddPostType = {
    newPost: NewPostType
    state: ProfilePageType
}*/

/*export type AddPostActionType = {
    type: 'ADD-POST'
    //newPost: NewPostType
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}*/
/*
export type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
    //body:string
}

export type ActionTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyType
    | SendMessageType

*/


/*
const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'more many', likesCount: 14},
            {id: 2, message: 'want meny many', likesCount: 32}
        ],
        newPostText: 'cacas'
    },
    dialogsPage: {
        messages: [
            {message: 'Agu', id: 1},
            {message: 'AGA', id: 2},
            {message: 'UIIII', id: 3},
        ],
        dialogs: [
            {id: 1, name: 'baby'},
            {id: 2, name: 'Ruslan'},
            {id: 3, name: 'Mariy'},
        ]
    },

}

export let addPost=()=>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)

}
export let updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}

export const subscribe=(observer: { (state: StateType): void })=>{
    rerenderEntireTree=observer
}
*/


//export default store

