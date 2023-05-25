import {InitialStateType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import React from 'react'
import seriousSem from '../assets/seriousSem.jpg'
import {NavLink} from "react-router-dom";

export type UsersType = {
    user: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    disable: Array<number>
    //isAuth?: boolean
    unFollow: (userId: number) => void
    Follow: (userId: number) => void

    //follow: (userId: number) => void
    //unfollow: (userId: number) => void
    //desableButton: (disable: boolean, userId: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //setUsers: (users: Array<InitialStateType>) => void
    //setCurrentPage: (pageNumber: number) => void

}

export const User = (props: UsersType) => {
let u =props.user
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : seriousSem}
                         className={styles.userPhoto}/>
                </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.disable.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unFollow(u.id)
                                  }}>Unfollow</button>
                        : <button disabled={props.disable.some(id => id === u.id)}
                                  onClick={() => {
                                      props.Follow(u.id)
                                  }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
        </div>
    )
}