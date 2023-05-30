import logo from "../../../logo.svg";
import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../assets/seriousSem.jpg'
import {ProfileDataForm, ProfileDataFormReduxForm} from "./ProfileDataForm";


type ProfileInfoType = {
    profile: any
    status: any
    updateUserStatus: (status: any) => void
    isOwner: any
    savePhoto: (file: any) => void
    saveProfile: () => void
}
export const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <div className='face'>
            <img src={logo} className={s.App_logo} alt="logo"/>
        </div>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        if (e.target.files.length) {
            // @ts-ignore
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: any) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className='face'>
                <img src={logo} className={s.App_logo} alt="logo"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataFormReduxForm profile={props.profile}
                                                onSubmit={onSubmit}
                                                initialValues={props.profile}
                    />
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                    />}


                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    )


    const ProfileData = (profile: any, isOwner: any, goToEditMode: any) => {
        return <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name: </b> {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>My pfessional skils: </b> {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me: </b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
            })}
            </div>
        </div>
    }

    const Contact = ({contactTitle: any, contactValue: any}) => {
        return (
            <div className={s.contact}>
                <b>{contactTitle}: </b>{contactValue}
            </div>
        )
    }
}