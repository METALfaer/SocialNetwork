import React from "react";
import {createFild, Input, Textarea} from "../../common/FormsControls/FormsControls";
import  {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";

type ProfileDataFormType={
    profile: any,

}
const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit, initialValues, error },props) => {
    return (
        <form>
            <div onSubmit={handleSubmit}>
               
                <button>save</button>
            </div>

            <div>
                <b>Full name: </b> {createFild('Full name',
                'fullName', [], Input)}
            </div>

            <div>
                <b>Looking for a job: </b>
                {createFild(
                    '', 'fullName', [], Input,
                    {type: 'checkbox'})}
            </div>

            <div>
                <b>My pfessional skils: </b>
                {createFild(
                    'My pfessional skils', 'lookingForAJobDescription', [], Textarea
                )}
            </div>

            <div>
                <b>About me: </b>
                {createFild(
                    'About me', 'aboutMe', [], Textarea
                )}
            </div>

            <div>
                <b>Contacts: </b>
                {initialValues.profile.contacts && Object.keys(initialValues.profile.contacts)?.map(key => {

                return <div key={key} className={s.contact}>

                    <b>{key}:</b>{createFild(

                    key, 'contacts.' + key, [], Input
                )}
                </div>
            })}
            </div>

        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)