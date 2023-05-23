import {InitialStateType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import React from 'react'
import seriousSem from '../assets/seriousSem.jpg'
import {NavLink, Redirect} from "react-router-dom";

export type UsersType = {
    users: Array<InitialStateType>
    //follow: (userId: number) => void
    //unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    disable: Array<number>
    //desableButton: (disable: boolean, userId: number) => void
    unFollow: (userId: number) => void
    Follow: (userId: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //setUsers: (users: Array<InitialStateType>) => void
    //setCurrentPage: (pageNumber: number) => void
    isAuth?:boolean
}

export const Users = (props: UsersType) => {
    /*if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am the boss',
                    location: {city: 'fdsada', country: 'fdsa'}
                },
                {
                    id: 2,
                    photoURL: 'https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg',
                    followed: true,
                    fullName: 'Vasa',
                    status: 'I am the boss',
                    location: {city: 'mvnbcx', country: 'nbvc'}
                },
                {
                    id: 3,
                    photoURL: 'https://st2.depositphotos.com/1471096/7466/i/600/depositphotos_74661735-stock-photo-angry-wolf-head.jpg',
                    followed: false,
                    fullName: 'Kola',
                    status: 'I am the boss',
                    location: {city: 'mutynrtbr', country: 'rtegr'}
                }
            ]
        )
    }*/
    /*componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${
            this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${
            pageNumber}&count=${this.props.pageSize}`)
    }*/

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    //if (props.isAuth===false) return <Redirect to={'/login'}/>
    return <div>
        <div>
            {pages.map(p => {
                    return <span className={
                        props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>
                            {p}
                        </span>
                }
            )}
        </div>
        {
            props.users.map(u => <div key={u.id}>
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
            </div>)
        }
    </div>
}