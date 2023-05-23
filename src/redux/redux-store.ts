import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type StoreType = ReturnType<typeof reducers>


const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export type AppActionsType = AuthActionsType | DialogsActionsTypes | ProfileActionsType | UsersActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsType>


// @ts-ignore
window.store = store

export default store