import React, {Component} from 'react';

class ProfileStatus extends Component<any> {

    state = {
        editMode: false,
        title:'yo'
    }

    activateEditMode=()=>{
        debugger
        console.log(this)
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} autoFocus/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;