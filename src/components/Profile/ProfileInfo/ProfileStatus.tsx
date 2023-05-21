import React, {ChangeEvent, Component} from 'react';

type ProfileStatusType = {
    status: any
    updateStatus: (status: any) => void
}

class ProfileStatus extends Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || '----'}
                        </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           autoFocus
                           onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;