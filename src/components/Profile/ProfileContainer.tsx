import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatus,
    savePhoto,
    saveProfile,
    setProfile,
    updateUserStatus,
    UserProfileType
} from "../../redux/profile-reducer";
import {StoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import {PhotoFileType} from "../../api/profileAPI";


type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    authorizedUserId: number | null
    isAuth: any
}

type MapDispatchToPropsType = {
    setProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile:UserProfileType) => Promise<void>
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileType = ProfilePropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            if (!this.props.authorizedUserId) {
                this.props.history.push('/login')
            }
            userId = `${this.props.authorizedUserId}`
        }
        this.props.setProfile(+userId)
        this.props.getUserStatus(+userId)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

/*let ProfileContainerWithRouter = withRouter(ProfileContainer)
export default WithAuthRedirect (connect(mapStateToProps,
    {setProfile})(ProfileContainerWithRouter))*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setProfile, getUserStatus,
        updateUserStatus,savePhoto,saveProfile}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

