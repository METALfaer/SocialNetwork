import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setProfile, UserProfileType} from "../../redux/profile-reducer";
import {StoreType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type PathParamsType = {
    userId: any
}
type MapStateToPropsType = {
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    setProfile: (userId: number) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileType = ProfilePropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 9615
        }
        this.props.setProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

/*let ProfileContainerWithRouter = withRouter(ProfileContainer)
export default WithAuthRedirect (connect(mapStateToProps,
    {setProfile})(ProfileContainerWithRouter))*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setProfile}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

