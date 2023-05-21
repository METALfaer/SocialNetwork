import {profileAPI} from "../api/profileAPI";
import {Dispatch} from "react";

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type StateProfilePageType = {
    posts: Array<PostsType>
    profile: any
    status: any
}
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText:any
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type SetUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: UserProfileType
}
export type SetStatusType = {
    status: any
    type: 'SET_STATUS'
}

export type ProfileActionTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileType
    | SetStatusType

let initialState: StateProfilePageType = {
    posts: [
        {id: 1, message: 'more many', likesCount: 14},
        {id: 2, message: 'want meny many', likesCount: 32}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: ProfileActionTypes) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        /*let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
        return stateCopy*/

       /* case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
            /!* let stateCopy = {...state}
             stateCopy.newPostText = action.newText
             return stateCopy*!/
        }*/

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: any): AddPostActionType => ({type: ADD_POST,newPostText})
/*export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})*/
export const setUserProfile = (profile: UserProfileType): SetUserProfileType => (
    {type: SET_USER_PROFILE, profile})
export const setStatus = (status: any): SetStatusType => (
    {type: SET_STATUS, status})

export const setProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionTypes>) => {
        profileAPI.getUserId(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId: any) => {
    return (dispatch: Dispatch<ProfileActionTypes>) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateUserStatus = (status: any) => {
    return (dispatch: Dispatch<ProfileActionTypes>) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode===0){
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer


/* if
            (action.type === ADD_POST)
        {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''

        }
        else
            if (action.type === UPDATE_NEW_POST_TEXT) {
                state.newPostText = action.newText
            }*/