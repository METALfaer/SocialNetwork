import React from 'react';
import s from "./Post.module.css";
import logo from "../../../../logo.svg";

type PostType={
    message:string
    likesCount:number
}
export const Post = (props:PostType) => {
    return (
        <div>
            <div className={s.item}>
                <img src={logo} className={s.App_logo} alt="logo"/>
                {props.message}
                <div>{props.likesCount}</div>
            </div>

        </div>
    );
};

export default Post;