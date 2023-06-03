import React from "react";
import {createFild, Input, Textarea} from "../../common/FormsControls/FormsControls";
import reduxForm from "redux-form";
import s from './ProfileInfo.module.css'
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (handleSUbmit: any, profile: any, error: any) => {
    return (
        <form>
            <div onSubmit={handleSUbmit}>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
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
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:</b>{createFild(
                    key, 'contacts.' + key, [], Input
                )}
                </div>
                /* <Contact key={key} contactTitle={key}
                                 contactValue={props.contacts[key]}/>*/
            })}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)