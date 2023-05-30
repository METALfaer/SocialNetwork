import React from "react";
import {createFild, Input, Textarea} from "../../common/FormsControls/FormsControls";
import reduxForm from "redux-form";

const ProfileDataForm = (handleSUbmit: any) => {
    return (
        <form>
            <div onSubmit={handleSUbmit}>
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
            {/*<div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
            })}
            </div>*/}
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)