import {StoreType} from "./redux-store";

export const getUsers= (state:StoreType)=>{
    return state.usersPage.users
}
export const getPageSize= (state:StoreType)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount= (state:StoreType)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage= (state:StoreType)=>{
    return state.usersPage.currentPage
}
export const getDisable= (state:StoreType)=>{
    return state.usersPage.disable
}
export const getIsAuth= (state:StoreType)=>{
    return state.auth.isAuth
}
