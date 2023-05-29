import React from "react";
import {createFild, Input} from "../../common/FormsControls/FormsControls";

export const ProfileDataForm = (profile: any) => {
    return (
        <form>
            <div>
                <button onClick={props.goToEditMode}>save</button>
            </div>
            <div>
                <b>Full name: </b> {createFild('Full name',
                'fullName', [], Input)}
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
            {/*<div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
            })}
            </div>*/}
        </form>
    )
}