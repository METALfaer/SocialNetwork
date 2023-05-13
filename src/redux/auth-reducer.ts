import {headerAPI} from "../api/headerAPI";
import {Dispatch} from "react";

type StateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth?: boolean
}

const SET_USER_DATA = 'SET_USER_DATA'

export type SetAuthUserDataType = {
    type: 'SET_USER_DATA'
    data: StateType
}
type ActionsType = SetAuthUserDataType

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetAuthUserDataType => ({
    type: "SET_USER_DATA",
    data: {userId, email, login}
})

export const authMe = () => {
    return (dispatch: Dispatch<ActionsType>) => {
        headerAPI.getAuthMe()
            .then(res => {
                if (res.resultCode === 0) {
                    const {id, email, login} = res.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}