import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {PhotoFileType} from "../../api/profileAPI";


type ProfileType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status:string)=>void
    isOwner:boolean
    savePhoto: (file: File) => void
    saveProfile: (profile:UserProfileType) => Promise<void>
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}

/*
posts={props.profilePage.posts}
dispatch={props.dispatch}
newPostText={props.profilePage.newPostText}*/
