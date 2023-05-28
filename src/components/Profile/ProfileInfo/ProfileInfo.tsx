import logo from "../../../logo.svg";
import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from'./../../assets/seriousSem.jpg'


type ProfileInfoType = {
    profile: any
    status: any
    updateUserStatus: (status: any) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    /*const changerAva = (e: ChangeEvent<HTMLInputElement>) => {
        thunk(e.currentTarget.value)
    }*/

    if (!props.profile) {
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
                <img src={props.profile.photos.large ||userPhoto}/>
                <input type={'file'} />
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}