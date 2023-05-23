import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setProfile, updateUserStatus, UserProfileType} from "../../redux/profile-reducer";
import {StoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from 'redux';


type PathParamsType = {
    userId: any
}
type MapStateToPropsType = {
    profile: UserProfileType
    status: any
    authorizedUserId:any
    isAuth:any
}

type MapDispatchToPropsType = {
    setProfile: (userId: number) => void
    getUserStatus: (userId: any) => void
    updateUserStatus: (status: any) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileType = ProfilePropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.setProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
})

/*let ProfileContainerWithRouter = withRouter(ProfileContainer)
export default WithAuthRedirect (connect(mapStateToProps,
    {setProfile})(ProfileContainerWithRouter))*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

