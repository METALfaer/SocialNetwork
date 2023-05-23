import logo from "../../../logo.svg";
import React from "react";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoType = {
    profile: any
    status: any
    updateUserStatus: (status:any)=>void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    if(!props.profile){
        return <div className='face'>
            <img src={logo} className={s.App_logo} alt="logo"/>
        </div>
    }

    return (
        <div>
            <div className='face'>
                <img src={logo} className={s.App_logo} alt="logo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}