import logo from "../../../logo.svg";
import React from "react";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";


type ProfileInfoType = {
    profile: any
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
                <ProfileStatus status={'Helo'}/>
            </div>
        </div>
    )
}