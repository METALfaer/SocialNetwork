import logo from "../../../logo.svg";
import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../assets/seriousSem.jpg'


type ProfileInfoType = {
    profile: any
    status: any
    updateUserStatus: (status: any) => void
    isOwner: any
    savePhoto: (file: any) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <div className='face'>
            <img src={logo} className={s.App_logo} alt="logo"/>
        </div>
    }

    const onMainPhotoSelected=(e:ChangeEvent<HTMLInputElement>)=>{
        // @ts-ignore
        if(e.target.files.length){
            // @ts-ignore
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className='face'>
                <img src={logo} className={s.App_logo} alt="logo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}