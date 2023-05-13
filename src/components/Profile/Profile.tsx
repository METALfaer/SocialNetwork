import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
profile:any
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

/*
posts={props.profilePage.posts}
dispatch={props.dispatch}
newPostText={props.profilePage.newPostText}*/
