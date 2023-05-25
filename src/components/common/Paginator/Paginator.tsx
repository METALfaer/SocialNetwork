import styles from './Paginator.module.css'
import React from 'react'

export type UsersType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: UsersType) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={
                    props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>
                            {p}
                </span>
            })}
        </div>
    )
}