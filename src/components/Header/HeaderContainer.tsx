import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import {StoreType} from "../../redux/redux-store";


type HeaderContainerType = {
    //setAuthUserData: (userId: number, email: string, login: string) => void
    isAuth?: boolean
    login: string | null
    logOut: () => void
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    /*componentDidMount() {

        this.props.authMe()
        /!*headerAPI.getAuthMe()
            .then(res => {
                if (res.resultCode === 0) {
                    const {id, email, login} = res.data
                    this.props.setAuthUserData(id, email, login)
                }
            })*!/
    }*/

    /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })*/

    //}

    render() {
        return <Header {...this.props} />
    }
}

type MapStateToPropsType = {
    isAuth?: boolean
    login: string | null
}
const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {logOut})(HeaderContainer)