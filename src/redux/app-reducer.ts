import {AppThunk} from "./redux-store";
import {authMe} from "./auth-reducer";

type StateType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type initializedSuccessType = {
    type: 'INITIALIZED_SUCCESS'
}
export type AuthActionsType = initializedSuccessType

let initialState = {
    initialized: false
}

export const appReducer = (state: StateType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = (): initializedSuccessType => ({type: "INITIALIZED_SUCCESS"})

export const initializeApp = (): AppThunk => {
    return (dispatch) => {
        let promise = dispatch(authMe())
        //dispatch(someone())
        //dispatch(sometwo())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

