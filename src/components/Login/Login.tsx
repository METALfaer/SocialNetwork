import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {createFild, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.logIn({
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
        })
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logIn, logOut})(Login)


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createFild('Email', 'email', [required], Input)}
            {createFild('Password', 'password',
                [required], Input, {type: 'password'})}
            {createFild(null, 'remember me',
                [], Input,
                {type: 'checkbox'}, 'rememberMe')}
            {/*  <div>
                <Field placeholder={'Email'} validate={[required]}
                       name={'email'} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]} name={'password'}
                       component={Input} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'}
                       component={Input}/>
                Remember Me
            </div>*/}
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)