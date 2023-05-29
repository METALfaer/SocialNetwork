import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: any
    updateStatus: (status: any) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEdidMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                    <b>Status: </b><span onDoubleClick={activateEditMode}>
                        {props.status || '----'}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus
                       onBlur={deactivateEdidMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;