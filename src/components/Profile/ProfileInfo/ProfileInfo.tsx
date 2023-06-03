import logo from "../../../logo.svg";
import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../assets/seriousSem.jpg'
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {ContactsKeys, UserProfileType} from "../../../redux/profile-reducer";


type ProfileInfoType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => Promise<void>
}
export const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <div className='face'>
            <img src={logo} className={s.App_logo} alt="logo"/>
        </div>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (profile: any) => {
        console.log(profile)
        props.saveProfile(profile).then(
            () => {
                setEditMode(false)
            }
        )
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
                    ? <ProfileDataFormReduxForm onSubmit={onSubmit}
                                                initialValues={{profile: props.profile}}
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


}
type ProfileDataType = {
    profile: UserProfileType,
    isOwner: boolean,
    goToEditMode: any
}
const ProfileData = (props: ProfileDataType) => {
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
        {/* <div>
            <b>About me: </b> {props.profile.aboutMe}
        </div>*/}
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
            const typedKey = key as unknown as ContactsKeys
            const value = props.profile.contacts[typedKey]
            return <Contact key={key} contactTitle={typedKey}
                            contactValue={value}/>
        })}
        </div>
    </div>
}

type ContactType = {
    contactTitle: ContactsKeys,
    contactValue: string
}
const Contact = (props: ContactType) => {
    return (
        <div className={s.contact}>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    )
}