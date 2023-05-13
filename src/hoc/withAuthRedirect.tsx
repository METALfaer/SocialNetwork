import React, {Component, ComponentType} from 'react';
import {Redirect} from "react-router";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean | undefined
}

const mapStateToPropsForRedirect = (state: StoreType): mapStateToPropsType => {
    return{
        isAuth: state.auth.isAuth
    }
}

function WithAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: mapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T as any}/>
    }
    let ConnectedAuthRedirectComponent = connect(
        mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
};

export default WithAuthRedirect;