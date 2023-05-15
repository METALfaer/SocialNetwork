import {userAPI} from "../api/userAPI";
import {Dispatch} from "react";


export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const DISABLE_BUTTON = 'DISABLE_BUTTON'

export type FollowType = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersType = {
    type: 'SET_USERS'
    users: Array<InitialStateType>
}
export type SetCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type SetTotalUsersCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}
export type DisableButtonType = {
    type: 'DISABLE_BUTTON'
    disable: boolean
    userId: number
}

export type UsersActionTypes = FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | DisableButtonType

export type InitialStateType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
}

export type UsersStateType = {
    users: Array<InitialStateType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    disable: Array<number>
}


const initialState: UsersStateType = {
    users: [],
    pageSize: 5,//количество пользователей на страничку
    totalUsersCount: 0,//количество всех пользователей пришедших нам
    currentPage: 2,//номер выбранной страницы(активной)
    disable: [],
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionTypes): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case DISABLE_BUTTON: {
            console.log(action.userId)
            return {
                ...state,
                disable: action.disable
                    ? [...state.disable, action.userId]
                    : state.disable.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export const follow = (userId: number): FollowType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): UnfollowType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<InitialStateType>): SetUsersType => (
    {type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => (
    {type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => (
    {type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const disableButton = (disable: boolean, userId: number): DisableButtonType => ({
    type: DISABLE_BUTTON,
    disable,
    userId
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionTypes>) => {
        userAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setUsers(res.items))
                dispatch(setTotalUsersCount(res.totalCount))
            })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionTypes>) => {
        dispatch(disableButton(true, userId))
        userAPI.unfollow(userId)
            .then(res => {
                    if (res.resultCode === 0) {
                        dispatch(unfollow(userId))
                    } else {
                        alert("ERROR")
                    }
                dispatch(disableButton(false, userId))
                }
            )
    }
}

export const Follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionTypes>) => {
        dispatch(disableButton(true, userId))
        userAPI.follow(userId)
            .then(res => {
                    if (res.resultCode === 0) {
                        dispatch(follow(userId))
                    } else {
                        alert("ERROR")
                    }
                    dispatch(disableButton(false, userId))
                }
            )
    }
}

