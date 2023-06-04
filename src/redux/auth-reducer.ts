import {headerAPI, logInDataType} from "../api/headerAPI";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

type StateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth?: boolean
    captchaUrl?: null
}

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type SetAuthUserDataType = {
    type: 'AUTH/SET_USER_DATA'
    payload: StateType
}
export type getCaptchaUrlSuccess = {
    type: 'GET_CAPTCHA_URL_SUCCESS'
    captchaUrl: any
}
export type AuthActionsType = SetAuthUserDataType | getCaptchaUrlSuccess

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: StateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case "GET_CAPTCHA_URL_SUCCESS": {
            return {
                ...state,
                captchaUrl: action.captchaUrl
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
    type: "AUTH/SET_USER_DATA",
    payload: {userId, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl: any): getCaptchaUrlSuccess => ({
    type: 'GET_CAPTCHA_URL_SUCCESS', captchaUrl
})

export const authMe = (): AppThunk => {
    return async (dispatch) => {
        let response = await headerAPI.getAuthMe()

        if (response.resultCode === 0) {
            const {id, email, login} = response.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}


export const logIn = (data: logInDataType): AppThunk => {
    return async (dispatch) => {
        let response = await headerAPI.logIn(data)
        if (response.resultCode === 0) {
            dispatch(authMe())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaURL())
            }
            let message = response.messages.length > 0
                ? response.messages[0]
                : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logOut = (): AppThunk => {
    return async (dispatch) => {
        let response = await headerAPI.logOut()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(
                null,
                null,
                null,
                false))
        }
    }
}

export const getCaptchaURL = (): AppThunk => {
    return async (dispatch) => {
        const response = await headerAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}