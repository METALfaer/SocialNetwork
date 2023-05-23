import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import {StoreType} from "./redux/redux-store";
import logo from "./logo.svg";
import s from "./components/Profile/ProfileInfo//ProfileInfo.module.css";
//import {ActionTypes, StateType, StoreType} from "./redux/store";


type AppType = {
    initializeApp: () => void
    initialized:boolean
}

class App extends Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
        /*headerAPI.getAuthMe()
            .then(res => {
                if (res.resultCode === 0) {
                    const {id, email, login} = res.data
                    this.props.setAuthUserData(id, email, login)
                }
            })*/
    }

    render() {
        if(!this.props.initialized){
            return <div className='face'>
                <img src={logo} className={s.App_logo} alt="logo"/>
            </div>
        }
        return (
            <div className='app-wrapper'>

                <HeaderContainer/>

                <Navbar/>

                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialog'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
type mapStateToPropsType={
    initialized:boolean
}
const mapStateToProps = (state: StoreType):mapStateToPropsType => ({
    initialized: state.app.initialized
})
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
