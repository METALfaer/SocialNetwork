import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {Follow, InitialStateType, requestUsers, setCurrentPage, unFollow} from "../../redux/users-reducer";
import {StoreType} from "../../redux/redux-store";
import {compose} from 'redux';
import {
    getCurrentPage,
    getDisable,
    getIsAuth,
    getPageSize,
    getTotalUsersCount,
    getUserSelector
} from "../../redux/users-selectors";


export type MapStateToPropsType = {
    users: Array<InitialStateType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    disable: Array<number>
    isAuth?: boolean
}
/*export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<InitialStateType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}*/

type UsersContainerType = {
    setCurrentPage: (pageNumber: number) => void
    pageSize: number
    users: Array<InitialStateType>
    currentPage: number
    totalUsersCount: number
    disable: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
    unFollow: (userId: number) => void
    Follow: (userId: number) => void
    isAuth?: boolean
}

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number,) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   disable={this.props.disable}
                   unFollow={this.props.unFollow}
                   Follow={this.props.Follow}
                   isAuth={this.props.isAuth}
            />
        )
    }
}

/*const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        disable: state.usersPage.disable,
        isAuth: state.auth.isAuth
    }
}*/

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        //users: getUsers(state),
        users: getUserSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        disable: getDisable(state),
        isAuth: getIsAuth(state)
    }
}


/*
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<InitialStateType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
    }
}*/


export default compose<React.ComponentType>(
    //WithAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage, getUsers: requestUsers, unFollow, Follow
    })
)(UsersContainer)

