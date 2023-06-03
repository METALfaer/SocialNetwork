import {profileAPI} from "../api/profileAPI";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
    newPostText: any
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
export type SavePhotoSuccessType = {
    photos: any
    type: 'SAVE_PHOTO_SUCCESS'
}

export type ProfileActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileType
    | SetStatusType
    | SavePhotoSuccessType

let initialState: StateProfilePageType = {
    posts: [
        {id: 1, message: 'more many', likesCount: 14},
        {id: 2, message: 'want meny many', likesCount: 32}
    ],

    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: ProfileActionsType) => {

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
        case "SAVE_PHOTO_SUCCESS": {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }

        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: any): AddPostActionType => ({type: ADD_POST, newPostText})
export const savePhotoSuccess = (photos: any): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

/*export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})*/
export const setUserProfile = (profile: UserProfileType): SetUserProfileType => (
    {type: SET_USER_PROFILE, profile})
export const setStatus = (status: any): SetStatusType => (
    {type: SET_STATUS, status})

export const setProfile = (userId: number): AppThunk => {
    return async (dispatch) => {
        let response = await profileAPI.getUserId(userId)
        dispatch(setUserProfile(response))
    }
}

export const getUserStatus = (userId: any): AppThunk => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId)
        dispatch(setStatus(response))
    }
}

export const updateUserStatus = (status: any): AppThunk => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file: any): AppThunk => {
    return async (dispatch) => {

        let response = await profileAPI.savePhoto(file)

        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
        }
    }
}

export const saveProfile = (profile: any): AppThunk => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        let response = await profileAPI.saveProfile(profile)

        if (response.resultCode === 0) {
            dispatch(setProfile(userId))
        }else {
            dispatch(stopSubmit('login', {
                _error: response.data.messages[0]}))
        }
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