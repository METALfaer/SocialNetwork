import {headerAPI, logInDataType} from "../api/headerAPI";
import {AppActionsType, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

type StateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth?: boolean
}

const SET_USER_DATA = 'SET_USER_DATA'

export type SetAuthUserDataType = {
    type: 'SET_USER_DATA'
    payload: StateType

}
export type AuthActionsType = SetAuthUserDataType

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: StateType = initialState, action: AppActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean): SetAuthUserDataType => ({
    type: "SET_USER_DATA",
    payload: {userId, email, login, isAuth}
})

export const authMe = (): AppThunk => {
    return (dispatch) => {
        headerAPI.getAuthMe()
            .then(res => {
                if (res.resultCode === 0) {
                    const {id, email, login} = res.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}
/*type fds={
    form:string
    errors:Object
}*/

export const logIn = (data: logInDataType): AppThunk  => {
    return (dispatch) => {
        headerAPI.logIn(data)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authMe())
                } else {
                    let message = data.messages.length > 0
                        ? data.messages[0]
                        : 'Some error'
                    dispatch(stopSubmit('login', {_error: message})as any)
                }
            })
    }
}

export const logOut = (): AppThunk => {
    return (dispatch) => {
        headerAPI.logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(
                        null,
                        null,
                        null,
                        false))
                }
            })
    }
}