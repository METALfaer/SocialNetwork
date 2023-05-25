import styles from './Paginator.module.css'
import React, {useState} from 'react'
import cn from 'classnames'

export type UsersType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: UsersType,{portionSize=10}) => {
    let pagesCount: number = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount=Math.ceil(pagesCount/portionSize)
    const[portionNumber,setPortionNumber]=useState(1)
    const leftPortionPageNumber=(portionNumber-1)*portionSize+1
    const rightPortionPageNumber=portionNumber*portionSize


    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>prev</button>}

            {pages
                .filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={cn({ [styles.selectedPage]
                        : props.currentPage === p},  styles.selectedPage )}
                                key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}
                </span>
            })}
            {portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
        </div>
    )
}